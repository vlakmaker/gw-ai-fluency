/**
 * Converts Obsidian wiki-links [[path|text]] and [[path]] to standard markdown links.
 * Also converts _index.md references to index.md (Astro convention).
 * 
 * Usage: node scripts/convert-wikilinks.mjs <directory>
 */

import fs from "fs";
import path from "path";

const targetDir = process.argv[2] || "src/content/docs";

function collectMdFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMdFiles(full));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      files.push(full);
    }
  }
  return files;
}

/**
 * Build a map of all content slugs for link resolution.
 * Maps "filename-without-ext" and "relative/path" to the actual slug.
 */
function buildSlugMap(dir) {
  const slugs = new Map();
  const files = collectMdFiles(dir);
  
  for (const file of files) {
    const rel = path.relative(dir, file);
    // Remove extension
    const noExt = rel.replace(/\.(md|mdx)$/, "");
    // Normalize path separators
    const slug = noExt.replace(/\\/g, "/");
    
    // Map by full relative path (without extension)
    slugs.set(slug, slug);
    
    // Map by filename only (for shortest-path resolution)
    const basename = path.basename(noExt);
    if (!slugs.has(basename)) {
      slugs.set(basename, slug);
    }
    
    // Map _index -> index variants
    const indexSlug = slug.replace(/_index$/, "index");
    if (indexSlug !== slug) {
      slugs.set(indexSlug, slug);
    }
  }
  
  return slugs;
}

function resolveWikiLink(linkPath, slugMap, currentFile, contentDir) {
  // Remove any _index suffix — in Astro, folder indexes work differently
  let normalized = linkPath.replace(/_index$/, "").replace(/\/$/, "");
  
  // Try direct match
  if (slugMap.has(normalized)) {
    return "/" + slugMap.get(normalized) + "/";
  }
  
  // Try with the current file's directory as prefix
  const currentDir = path.dirname(path.relative(contentDir, currentFile));
  const relative = path.join(currentDir, normalized).replace(/\\/g, "/");
  if (slugMap.has(relative)) {
    return "/" + slugMap.get(relative) + "/";
  }
  
  // Try basename only (shortest path resolution)
  const basename = path.basename(normalized);
  if (slugMap.has(basename)) {
    return "/" + slugMap.get(basename) + "/";
  }
  
  // Fallback — return as-is with leading slash
  console.warn(`  WARN: Could not resolve [[${linkPath}]] in ${path.relative(contentDir, currentFile)}`);
  return "/" + normalized + "/";
}

function convertWikiLinks(content, currentFile, slugMap, contentDir) {
  // Match [[path|text]] and [[path]]
  return content.replace(/\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (match, linkPath, displayText) => {
    const resolved = resolveWikiLink(linkPath.trim(), slugMap, currentFile, contentDir);
    const text = displayText ? displayText.trim() : linkPath.trim().split("/").pop();
    return `[${text}](${resolved})`;
  });
}

function main() {
  const absDir = path.resolve(targetDir);
  
  if (!fs.existsSync(absDir)) {
    console.error(`Directory not found: ${absDir}`);
    process.exit(1);
  }
  
  console.log(`Building slug map from ${absDir}...`);
  const slugMap = buildSlugMap(absDir);
  console.log(`Found ${slugMap.size} slug entries.\n`);
  
  const files = collectMdFiles(absDir);
  let totalConverted = 0;
  
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const converted = convertWikiLinks(content, file, slugMap, absDir);
    
    if (converted !== content) {
      const count = (content.match(/\[\[[^\]]+\]\]/g) || []).length;
      totalConverted += count;
      fs.writeFileSync(file, converted, "utf-8");
      console.log(`  Converted ${count} links in ${path.relative(absDir, file)}`);
    }
  }
  
  console.log(`\nDone. Converted ${totalConverted} wiki-links across ${files.length} files.`);
}

main();

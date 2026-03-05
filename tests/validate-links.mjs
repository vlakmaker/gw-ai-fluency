/**
 * Internal link checker for the AI Fluency Playbook (Astro/Starlight).
 *
 * Scans all markdown files under src/content/docs/ and verifies that every
 * internal markdown link resolves to an existing file.
 *
 * Supports:
 *   [text](relative/path/)
 *   [text](../relative/path/)
 *   [text](/absolute/path/)
 *
 * Skips external links (http://, https://, mailto:, etc.)
 */

import fs from "fs";
import path from "path";

const CONTENT_DIR = path.resolve("src/content/docs");

let errors = [];

// ── Helpers ──────────────────────────────────────────────────────────

function collectMarkdownFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(full));
    } else if (entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function relPath(file) {
  return path.relative(process.cwd(), file);
}

/**
 * Build a set of all resolvable URL paths that Astro/Starlight will generate.
 * For example, src/content/docs/pillars/index.md -> "pillars"
 *              src/content/docs/pillars/ethical-prompting.md -> "pillars/ethical-prompting"
 */
function buildRouteIndex(files) {
  const index = new Set();
  for (const file of files) {
    let rel = path.relative(CONTENT_DIR, file).replace(/\.md$/, "");
    // index files map to their directory
    if (rel.endsWith("/index")) {
      rel = rel.replace(/\/index$/, "");
    } else if (rel === "index") {
      rel = "";
    }
    index.add(rel);
  }
  return index;
}

/**
 * Extract all internal markdown links from content.
 * Returns an array of { href, raw } objects.
 */
function extractMarkdownLinks(content) {
  // Match [text](href) but not ![image](src)
  const regex = /(?<!!)\[([^\]]*)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const href = match[2].trim();
    // Skip external links, anchors-only, and mailto
    if (href.startsWith("http://") || href.startsWith("https://") ||
        href.startsWith("mailto:") || href.startsWith("#")) {
      continue;
    }
    links.push({ href, raw: match[0] });
  }
  return links;
}

/**
 * Resolve an internal link href relative to the file it appears in.
 * Returns the normalized route path to look up in the index.
 */
function resolveLink(href, file, routeIndex) {
  // Strip anchor
  const cleanHref = href.split("#")[0];
  if (!cleanHref) return true; // anchor-only link

  // Strip trailing slash
  const trimmed = cleanHref.replace(/\/$/, "") || "";

  if (trimmed === "") {
    // Root link "/" -> maps to index route ""
    return routeIndex.has("");
  }

  if (trimmed.startsWith("/")) {
    // Absolute path from site root — Starlight routes start from content root
    const route = trimmed.replace(/^\//, "");
    return routeIndex.has(route);
  }

  // Relative path — resolve from the file's directory
  const fileRoute = path.relative(CONTENT_DIR, file).replace(/\.md$/, "");
  const fileDir = path.dirname(fileRoute);
  const resolved = path.normalize(path.join(fileDir, trimmed));
  return routeIndex.has(resolved);
}

// ── Main ────────────────────────────────────────────────────────────

function main() {
  console.log("Validating internal markdown links...\n");

  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`ERROR: content directory not found at ${CONTENT_DIR}`);
    process.exit(1);
  }

  const allFiles = collectMarkdownFiles(CONTENT_DIR);
  const routeIndex = buildRouteIndex(allFiles);
  let totalLinks = 0;

  console.log(`Indexed ${allFiles.length} markdown files (${routeIndex.size} routes).`);

  for (const file of allFiles) {
    const content = fs.readFileSync(file, "utf-8");
    const links = extractMarkdownLinks(content);

    for (const { href, raw } of links) {
      totalLinks++;

      if (!resolveLink(href, file, routeIndex)) {
        errors.push(`${relPath(file)}: broken link ${raw} — target "${href}" not found`);
      }
    }
  }

  console.log(`Checked ${totalLinks} internal links.\n`);

  if (errors.length > 0) {
    console.log(`✗  ${errors.length} broken link(s):`);
    for (const e of errors) {
      console.log(`   FAIL: ${e}`);
    }
    console.log();
    process.exit(1);
  }

  console.log(`✓  All ${totalLinks} internal links resolve correctly.`);
}

main();

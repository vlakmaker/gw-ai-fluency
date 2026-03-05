/**
 * Internal wiki-link checker for the AI Fluency Playbook.
 *
 * Scans all markdown files under playbook/ and verifies that every
 * [[wiki-link]] resolves to an existing file.
 *
 * Supports:
 *   [[path]]
 *   [[path|display text]]
 *   [[path#heading]]
 *   [[path#heading|display text]]
 */

import fs from "fs";
import path from "path";

const PLAYBOOK_DIR = path.resolve("playbook");

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
 * Build a set of all resolvable paths (without .md extension)
 * relative to the playbook directory.
 */
function buildFileIndex(files) {
  const index = new Set();
  for (const file of files) {
    // Add relative path from playbook dir, without .md
    const rel = path.relative(PLAYBOOK_DIR, file).replace(/\.md$/, "");
    index.add(rel);

    // Also add just the filename without extension (Obsidian resolves by name)
    const basename = path.basename(file, ".md");
    index.add(basename);
  }
  return index;
}

/**
 * Extract all wiki-links from a markdown string.
 * Returns an array of { target, raw } objects.
 */
function extractWikiLinks(content) {
  const regex = /\[\[([^\]]+)\]\]/g;
  const links = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const raw = match[1];
    // Strip display text (after | or \|) and heading anchor (after #)
    // Obsidian uses \| inside table cells to escape the pipe
    const target = raw.split(/\\?\|/)[0].split("#")[0].trim();
    if (target) {
      links.push({ target, raw });
    }
  }
  return links;
}

// ── Main ────────────────────────────────────────────────────────────

function main() {
  console.log("Validating internal wiki-links...\n");

  if (!fs.existsSync(PLAYBOOK_DIR)) {
    console.error(`ERROR: playbook directory not found at ${PLAYBOOK_DIR}`);
    process.exit(1);
  }

  const allFiles = collectMarkdownFiles(PLAYBOOK_DIR);
  const fileIndex = buildFileIndex(allFiles);
  let totalLinks = 0;

  console.log(`Indexed ${allFiles.length} markdown files.`);

  for (const file of allFiles) {
    const content = fs.readFileSync(file, "utf-8");
    const links = extractWikiLinks(content);

    for (const { target, raw } of links) {
      totalLinks++;

      // Try resolving: as-is, relative to file's directory, relative to playbook root
      const resolved =
        fileIndex.has(target) ||
        fileIndex.has(path.join(path.relative(PLAYBOOK_DIR, path.dirname(file)), target));

      if (!resolved) {
        errors.push(`${relPath(file)}: broken link [[${raw}]] — target "${target}" not found`);
      }
    }
  }

  console.log(`Checked ${totalLinks} wiki-links.\n`);

  if (errors.length > 0) {
    console.log(`✗  ${errors.length} broken link(s):`);
    for (const e of errors) {
      console.log(`   FAIL: ${e}`);
    }
    console.log();
    process.exit(1);
  }

  console.log(`✓  All ${totalLinks} wiki-links resolve correctly.`);
}

main();

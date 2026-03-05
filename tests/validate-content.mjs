/**
 * Content validation tests for the AI Fluency Playbook.
 *
 * Checks:
 * 1. Frontmatter — required fields with valid values on every exercise
 * 2. Exercise template compliance — required sections present
 * 3. Pillar coverage — each pillar has at least one exercise per level
 * 4. No empty exercises — flags files that contain only placeholder HTML comments
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PLAYBOOK_DIR = path.resolve("playbook");
const EXERCISES_DIR = path.join(PLAYBOOK_DIR, "exercises");

const VALID_PILLARS = [
  "agent-collaboration",
  "cross-domain-reframing",
  "ethical-prompting",
  "insight-synthesis",
  "workflow-automation",
];

const VALID_LEVELS = ["basic", "intermediate", "advanced"];

const REQUIRED_FRONTMATTER = ["pillar", "level", "archetype-fit", "time-estimate", "tags"];

const REQUIRED_SECTIONS = [
  "🔧 Jump in",
  "📋 Plan first",
  "🧭 Why this matters",
  "Reflection",
  "⬆️ Level up",
];

let errors = [];
let warnings = [];

// ── Helpers ──────────────────────────────────────────────────────────

function collectExerciseFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectExerciseFiles(full));
    } else if (entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function relPath(file) {
  return path.relative(process.cwd(), file);
}

// ── 1. Frontmatter validation ───────────────────────────────────────

function validateFrontmatter(file, data) {
  const rel = relPath(file);

  for (const field of REQUIRED_FRONTMATTER) {
    if (data[field] === undefined || data[field] === null || data[field] === "") {
      errors.push(`${rel}: missing required frontmatter field "${field}"`);
    }
  }

  if (data.pillar && !VALID_PILLARS.includes(data.pillar)) {
    errors.push(`${rel}: invalid pillar "${data.pillar}" — expected one of: ${VALID_PILLARS.join(", ")}`);
  }

  if (data.level && !VALID_LEVELS.includes(data.level)) {
    errors.push(`${rel}: invalid level "${data.level}" — expected one of: ${VALID_LEVELS.join(", ")}`);
  }

  if (data["archetype-fit"] && !Array.isArray(data["archetype-fit"])) {
    errors.push(`${rel}: "archetype-fit" must be an array`);
  }

  if (data["archetype-fit"] && Array.isArray(data["archetype-fit"]) && data["archetype-fit"].length === 0) {
    errors.push(`${rel}: "archetype-fit" must not be empty`);
  }

  if (data.tags && !Array.isArray(data.tags)) {
    errors.push(`${rel}: "tags" must be an array`);
  }
}

// ── 2. Template compliance ──────────────────────────────────────────

function validateSections(file, content) {
  const rel = relPath(file);

  for (const section of REQUIRED_SECTIONS) {
    if (!content.includes(section)) {
      errors.push(`${rel}: missing required section "${section}"`);
    }
  }
}

// ── 3. Empty exercise detection ─────────────────────────────────────

function checkForPlaceholderContent(file, content) {
  const rel = relPath(file);

  // Strip frontmatter block, headings, horizontal rules, and standard reflection lines
  const body = content
    .replace(/^---[\s\S]*?---/, "")          // remove frontmatter
    .replace(/^#+\s.*$/gm, "")               // remove headings
    .replace(/^---$/gm, "")                  // remove horizontal rules
    .replace(/^>\s\*\*One-liner:\*\*.*$/gm, "")  // remove one-liner
    .replace(/^- What surprised you.*$/gm, "")
    .replace(/^- What did you have to fix.*$/gm, "")
    .replace(/^- How would you explain.*$/gm, "")
    .replace(/^- 💬 \*Discuss:.*$/gm, "")
    .replace(/<!--[\s\S]*?-->/g, "")         // remove HTML comments
    .replace(/^\s*\[\[.*\]\].*$/gm, "")      // remove wiki-link lines
    .replace(/^Back to.*$/gm, "")            // remove nav lines
    .replace(/^Ready for more\?.*$/gm, "")
    .replace(/^You've reached the advanced.*$/gm, "")
    .trim();

  if (body.length === 0) {
    warnings.push(`${rel}: exercise appears to contain only placeholder/template content`);
  }
}

// ── 4. Pillar coverage ──────────────────────────────────────────────

function checkPillarCoverage(exerciseFiles) {
  const coverage = {};
  for (const pillar of VALID_PILLARS) {
    coverage[pillar] = new Set();
  }

  for (const file of exerciseFiles) {
    const raw = fs.readFileSync(file, "utf-8");
    const { data } = matter(raw);
    if (data.pillar && coverage[data.pillar]) {
      coverage[data.pillar].add(data.level);
    }
  }

  for (const pillar of VALID_PILLARS) {
    for (const level of VALID_LEVELS) {
      if (!coverage[pillar].has(level)) {
        errors.push(`Pillar coverage gap: "${pillar}" has no exercise at level "${level}"`);
      }
    }
  }
}

// ── Main ────────────────────────────────────────────────────────────

function main() {
  console.log("Validating playbook content...\n");

  if (!fs.existsSync(EXERCISES_DIR)) {
    console.error(`ERROR: exercises directory not found at ${EXERCISES_DIR}`);
    process.exit(1);
  }

  const exerciseFiles = collectExerciseFiles(EXERCISES_DIR);
  console.log(`Found ${exerciseFiles.length} exercise files.\n`);

  // Validate each exercise
  for (const file of exerciseFiles) {
    const raw = fs.readFileSync(file, "utf-8");
    const { data, content } = matter(raw);

    validateFrontmatter(file, data);
    validateSections(file, content);
    checkForPlaceholderContent(file, content);
  }

  // Check coverage
  checkPillarCoverage(exerciseFiles);

  // Report
  if (warnings.length > 0) {
    console.log(`⚠  ${warnings.length} warning(s):`);
    for (const w of warnings) {
      console.log(`   WARN: ${w}`);
    }
    console.log();
  }

  if (errors.length > 0) {
    console.log(`✗  ${errors.length} error(s):`);
    for (const e of errors) {
      console.log(`   FAIL: ${e}`);
    }
    console.log();
    process.exit(1);
  }

  console.log(`✓  All content validation checks passed.`);
  if (warnings.length > 0) {
    console.log(`   (${warnings.length} warning(s) — placeholder content detected, not blocking)`);
  }
}

main();

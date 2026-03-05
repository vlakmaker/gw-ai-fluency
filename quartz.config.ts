import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz v4 configuration for the AI Fluency Playbook.
 *
 * Content directory: playbook/
 * Base URL: update when domain is decided (currently placeholder).
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "AI Fluency Playbook",
    pageTitleSuffix: " — Generalist World",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "playbook.informationgeek.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Work Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e0b1ff",
          gray: "#9b51e0",
          darkgray: "#02061d",
          dark: "#5c0098",
          secondary: "#5c0098",
          tertiary: "#7a00df",
          highlight: "rgba(224, 177, 255, 0.2)",
          textHighlight: "#fff58388",
        },
        darkMode: {
          light: "#02061d",
          lightgray: "#2a1a3e",
          gray: "#9b51e0",
          darkgray: "#e0b1ff",
          dark: "#f9efff",
          secondary: "#e0b1ff",
          tertiary: "#9b51e0",
          highlight: "rgba(92, 0, 152, 0.25)",
          textHighlight: "#ffee3288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

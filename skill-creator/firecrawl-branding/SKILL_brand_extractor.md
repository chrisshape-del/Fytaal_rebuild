---
name: firecrawl-branding
description: Extracts comprehensive brand identity information (colors, fonts, logos, etc.) from websites using Firecrawl's branding format.
---

# Firecrawl Branding Skill

## Overview

 This skill allows you to extract detailed brand identity information from any website using the Firecrawl `branding` format. This is essential for maintaining design consistency when building new pages or components for a brand, or for analyzing competitor designs.

 It retrieves:
 *   **Colors:** Primary, secondary, accent, background, text colors.
 *   **Typography:** Font families, sizes, weights, line heights.
 *   **Images:** Logos, favicons, OG images.
 *   **Components:** Button styles, input styles.
 *   **Spacing:** Base units, border radius.

## Usage

 The primary way to use this skill is via the `mcp_firecrawl_firecrawl_scrape` MCP tool with the `formats` parameter.

 **CRITICAL:** You MUST pass the `formats` parameter as an array of strings. Without it, you'll only get markdown.

### Basic Branding Extraction

 To get just the branding information, call the MCP tool like this:

 ```xml
 <invoke name="mcp_firecrawl_firecrawl_scrape">
   <parameter name="url">https://example.com</parameter>
   <parameter name="formats">["branding"]</parameter>
 </invoke>
 ```

### Comprehensive Extraction (Recommended)

 Combine `branding` with `markdown` (for content) and `screenshot` (for visual verification):

 ```xml
 <invoke name="mcp_firecrawl_firecrawl_scrape">
   <parameter name="url">https://example.com</parameter>
   <parameter name="formats">["branding", "markdown", "screenshot"]</parameter>
 </invoke>
 ```

 **Format descriptions:**
 - `branding`: Structured design tokens (colors, fonts, spacing, components)
 - `markdown`: Text content (useful for voice/tone analysis)
 - `screenshot`: Visual reference to verify the branding data


## Handling the Output

 The output will contain a `branding` object. When using this data to build UI:

 1.  **Map Colors:** Use the extracted hex codes to set up your CSS variables or Tailwind config (e.g., set `primary` to the `colors.primary` value).
 2.  **Import Fonts:** Check the `fonts` array and `typography` object. You may need to import these fonts from Google Fonts or similar if they are not standard web fonts.
 3.  **Apply Radius/Spacing:** Use `spacing.borderRadius` and `spacing.baseUnit` to define your spacing scale and component shapes.
 4.  **Use Assets:** The `images.logo` and `images.favicon` URLs can be used directly in your application.

## Troubleshooting

 *   **🔴 MOST COMMON ERROR - No branding data returned:** You forgot the `formats` parameter! Without `formats=["branding"]`, the tool only returns markdown. Always include it.
 
 *   **Missing Data:** If specific fields (like specific button colors) are missing, the AI extraction might have failed to identify them. Fallback to the screenshot or manual inspection if critical.
 
 *   **Incorrect Fonts:** Sometimes font names are generic (e.g., "sans-serif"). Look at the `html` or `markdown` output if you need to dig deeper into specific font face declarations, or use the Chrome DevTools skill to inspect the computed styles.
 
 *   **Low Confidence Scores:** If the `confidence` scores are low (0-0.3), the extraction may be unreliable. Consider combining with `screenshot` format to manually verify.

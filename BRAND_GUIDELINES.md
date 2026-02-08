# Fytaal Brand Guidelines

> **Extracted:** 2026-01-24  
> **Source:** [fytaal.nl](https://fytaal.nl)  
> **Method:** Firecrawl AI Brand Extraction

---

## Brand Identity

**Name:** Fytaal  
**Tagline:** "Van Klacht Naar Kracht" (From Complaint to Strength)  
**Industry:** Personal Gym, Fysiotherapie, Vitaliteit  
**Location:** Baarn, Netherlands  
**Color Scheme:** Light

---

## Color Palette

| Color | Hex | RGB | Usage |
|:---|:---|:---|:---|
| **Primary (Deep Teal)** | `#0d6452` | rgb(13, 100, 82) | Main brand color, CTAs, highlights |
| **Accent (Dark Green)** | `#1A3128` | rgb(26, 49, 40) | Links, secondary elements |
| **Background** | `#808080` | rgb(128, 128, 128) | Gray backgrounds |
| **Text Primary** | `#808080` | rgb(128, 128, 128) | Body text |
| **Link Color** | `#1A3128` | rgba(10, 27, 21, 1) | Hyperlinks |

### CSS Variables
```css
:root {
  --color-primary: #0d6452;
  --color-accent: #1A3128;
  --color-background: #808080;
  --color-text-primary: #808080;
  --color-link: #1A3128;
}
```

### Tailwind Config
```js
colors: {
  primary: '#0d6452',
  accent: '#1A3128',
  gray: {
    DEFAULT: '#808080',
  }
}
```

---

## Typography

### Font Families

**Primary Font:** Open Sans  
**Fallback Stack:** Open Sans, Arial, Helvetica, sans-serif

### Font Sizes

| Element | Size | rem (16px base) |
|:---|:---|:---|
| **H1** | 16px | 1rem |
| **H2** | 45px | 2.8125rem |
| **Body** | 16px | 1rem |

### Implementation

```css
/* Primary Font Import (Google Fonts) */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --font-primary: 'Open Sans', Arial, Helvetica, sans-serif;
  --font-heading: 'Open Sans', Arial, Helvetica, sans-serif;
  
  --font-size-h1: 16px;
  --font-size-h2: 45px;
  --font-size-body: 16px;
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-body);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
```

---

## Spacing & Layout

**Base Unit:** 4px  
**Border Radius:** 10px

### Spacing Scale (4px base)

```css
:root {
  --spacing-1: 4px;   /* 1x */
  --spacing-2: 8px;   /* 2x */
  --spacing-3: 12px;  /* 3x */
  --spacing-4: 16px;  /* 4x */
  --spacing-6: 24px;  /* 6x */
  --spacing-8: 32px;  /* 8x */
  --spacing-12: 48px; /* 12x */
  --spacing-16: 64px; /* 16x */
  
  --radius: 10px;
}
```

---

## Brand Assets

### Logo
**URL:** [https://fytaal.nl/wp-content/uploads/2021/04/cropped-Fytaal-Logo-licht-e1618902327863.png](https://fytaal.nl/wp-content/uploads/2021/04/cropped-Fytaal-Logo-licht-e1618902327863.png)

### Favicon
**URL:** [https://fytaal.nl/wp-content/uploads/2021/04/cropped-Fytaal-Logo-pakket_01-03-e1619444247926-32x32.png](https://fytaal.nl/wp-content/uploads/2021/04/cropped-Fytaal-Logo-pakket_01-03-e1619444247926-32x32.png)

### Open Graph Image
**URL:** [http://fytaal.nl/wp-content/uploads/2021/04/Fytaal-home-scaled-e1618900723571.jpg](http://fytaal.nl/wp-content/uploads/2021/04/Fytaal-home-scaled-e1618900723571.jpg)

---

## Brand Voice & Tone

**Personality:**
- Supportive
- Professional
- Goal-oriented
- Personal & approachable

**Key Messaging:**
- "waar personal echt persoonlijk is!" (where personal is truly personal!)
- Emphasis on structured, phase-based approach ("De Fytaal Aanpak in 5 fases")
- Inclusive: "iedereen vooruit kan — ongeacht je huidige situatie"
- Progress-focused: "stap voor stap", "van klacht naar kracht"

**Target Audience:**
- Individuals with injuries or physical complaints
- Post-physical therapy clients
- Athletes seeking performance optimization
- Health-conscious individuals seeking personalized guidance

---

## Technical Info

**CMS:** WordPress 6.4.7  
**Plugins:** Site Kit by Google 1.168.0, EventON 4.5.9

---

## Usage Guidelines

### Do's ✅
- Use the deep teal primary color (#0d6452) for calls-to-action and highlights
- Maintain the 4px spacing system for consistency
- Use Open Sans throughout all materials
- Apply 10px border radius for rounded corners
- Emphasize the supportive, personal approach in messaging

### Don'ts ❌
- Don't use colors outside the defined palette
- Don't use different font families (stick to Open Sans)
- Don't deviate from the 4px spacing grid
- Don't use generic fitness stock photos (use real client imagery when possible)

---

## Quick Reference

```css
/* Fytaal Brand Tokens */
--color-primary: #0d6452;
--color-accent: #1A3128;
--font-primary: 'Open Sans', sans-serif;
--spacing-base: 4px;
--radius: 10px;
```

**Last Updated:** 2026-01-24

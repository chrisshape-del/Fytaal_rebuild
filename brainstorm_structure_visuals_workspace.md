## 🧠 Brainstorm: Fytaal "Warmth & Depth" Rebuild

### Context
De huidige site is een one-pager. De wens is om deze om te bouwen naar een **multi-page website** met een **visueel sterker en warmer** karakter. Er is al content beschikbaar voor specifieke diensten (Hyrox, Vitaliteit, Fysio, etc.).

We zoeken naar een balans tussen de bestaande "High End" uitstraling en de nieuwe wens voor "Warmte" (minder steriel/koud).

---

### Option A: De "Boutique Hotel" Sfeer (Warm Luxury)
*Focus op sfeer, gastvrijheid en rust.*

**Visueel Concept:**
- **Kleuren:** Veel gebruik van warme aardetinten: Crème, Zand, Diep Olijf, en Warm Goud. Vermijd puur wit en puur zwart.
- **Typografie:** Elegante, klassieke koppen (Serif, bv. *Cormorant Garamond*) gecombineerd met strakke leesletters.
- **Beeld:** Foto's met een "Golden Hour" filter (warme gloed). Zachte overgangen tussen secties.
- **Textuur:** Subtiele papier- of ruis-texturen op de achtergrond om het digitale randje eraf te halen.

**Structuur (Multi-page):**
- **Navigatie:** Klassieke header met uitklapmenu's voor "Aanbod".
- **Pagina's:** Elke dienst (Hyrox, Fysio) krijgt een eigen "Sfeerpagina" met testimonials, sfeerfoto's en diepgang.
- **Home:** Een "Lobby" die uitnodigt en warm welkom heet, met teasers naar de diepere pagina's.

✅ **Pros:**
- Voelt zeer exclusief en persoonlijk.
- Straalt rust en vertrouwen uit (goed voor Fysio/Vitaliteit).
- "Warmte" staat centraal.

❌ **Cons:**
- Kan soms iets minder "sportief/actief" overkomen als het *te* rustig wordt.

---

### Option B: De "Editorial Magazine" Stijl (Bold & Strong)
*Focus op kracht, storytelling en redactionele opmaak.*

**Visueel Concept:**
- **Layout:** "Grid-breaking" layouts. Foto's overlappen tekst, teksten staan soms verticaal. Niet alles netjes in vakjes.
- **Typografie:** Grote, dikke koppen (Bold Sans) voor statements, gemixt met verfijnde details.
- **Kleur:** Hoog contrast. Donkergroene achtergronden met felle accenten (terracotta of brons) voor actie-knoppen.
- **Beeld:** Grote, paginavullende beelden die het verhaal vertellen. Parallax effecten bij het scrollen.

**Structuur (Multi-page):**
- **Routing:** Voelt als het bladeren door een high-end magazine.
- **Sidebar Navigatie:** Of een groot "Mega Menu" dat de ruimte neemt.
- **Content:** Veel ruimte voor "verhalen" (Case studies, klantreizen) op de sub-pagina's.

✅ **Pros:**
- Visueel zeer sterk en onderscheidend.
- Maakt van Fytaal een "Merk" in plaats van alleen een sportschool.
- Perfect voor krachtige programma's zoals Hyrox.

❌ **Cons:**
- Vraagt om zeer goed beeldmateriaal (wat er gelukkig deels is).
- Iets complexer om te bouwen (custom layouts).

---

### Option C: De "Organic Flow" (Dynamic & Human)
*Focus op beweging, menselijkheid en connectie.*

**Visueel Concept:**
- **Vormen:** Geen rechte lijnen, maar organische golven en rondingen ("blobs") die secties verbinden.
- **Interactie:** Beelden komen tot leven bij hover ("micro-interacties"). Video-achtergronden die vertraagd afspelen voor een levendig effect.
- **Kleur:** Natuurlijke gradienten. Van zacht groen naar warm beige. Glasmorphism (matglas effecten) met een warme tint.
- **Sfeer:** Fris, energiek maar wel toegankelijk.

**Structuur (Multi-page):**
- **Vloeibare overgangen:** Pagina-overgangen (Page Transitions) waarbij de ene pagina in de andere vloeit.
- **Focus:** Sterke nadruk op het "Team" en de mensen. Foto's van trainers staan centraal op elke service pagina.

✅ **Pros:**
- Zeer modern en interactief.
- Voelt heel "levend" en energiek.
- Goede balans tussen sport en gezondheid.

❌ **Cons:**
- Kan technisch zwaar worden (performance).
- Risico dat het iets "te speels" wordt ipv "premium".

---

## 🏛️ Architectuur Voorstel (Geldt voor alle opties)

We stappen af van de one-pager (`#aanbod`) en gaan naar echte routes:

1.  **Home** (`/`) - De etalage.
2.  **Over Ons / Team** (`/team`) - Wie zijn wij?
3.  **Aanbod** (Overzichtspagina `/aanbod` + Subpagina's):
    *   `/aanbod/personal-group-training`
    *   `/aanbod/vitaliteit`
    *   `/aanbod/hyrox`
    *   `/aanbod/fysiotherapie`
    *   `/aanbod/kickstart`
    *   `/aanbod/rooster` & `/aanbod/prijzen`
4.  **Contact** (`/contact`)

Dit geeft ons de ruimte om per dienst écht de diepte in te gaan en specifieke SEO-landingspagina's te maken.

---

## 💡 Recommendation

Ik adviseer een combinatie: **De basis van Option A ("Warm Luxury") met de krachtige layouts van Option B.**

*   **Waarom?** Je wilt "Warmte" (Optie A) maar ook "Visuele Kracht" (Optie B). We gebruiken de warme kleuren en texturen van A, maar de spannende layouts van B zodat het niet saai wordt.

**Concreet eerste stap:**
1.  We zetten de **Routing** op (technische basis).
2.  We ontwerpen een **Nieuw Header/Menu** dat past bij een multi-page site.
3.  We bouwen 1 "Master" detailpagina (bv. voor Hyrox) in de nieuwe warme stijl als template.

Wat spreekt je het meeste aan? Meer de "Hotel Chic" kant (A), de "Magazine" kant (B), of de "Organic" kant (C)?

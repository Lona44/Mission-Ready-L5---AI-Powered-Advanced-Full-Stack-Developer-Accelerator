# Marketing Association NZ - Digital News Home Page

A responsive digital news home page template built for Marketing Association New Zealand as part of the Mission Ready Tech Career Accelerator programme.

## Project Overview

This project is a prototype solution for Marketing Association NZ's digital news platform. The application showcases a clean, professional news listing interface inspired by Vox, featuring a hero section with integrated search and a responsive grid layout for news articles.

**Note**: This project is Mission 0 within the Mission Ready L5 Tech Career Accelerator programme. The repository is structured to contain multiple missions (Mission-0 through Mission-6), with each mission in its own folder.

## The Brief

Marketing Association New Zealand contracted this project to create a quick page template for their new digital news home page. The requirements were straightforward: build a single-page application with mobile responsiveness that follows the provided wireframe while allowing creative freedom with colour palettes and imagery.

## Outcome

A responsive React application featuring:

- **Hero Section**: Eye-catching headline area with background imagery and integrated search functionality
- **News Grid**: Three-column layout (desktop) that adapts to two columns (tablet) and single column (mobile)
- **Interactive Elements**: Clickable news cards and hero headline that link to external articles and references to inspiration of design
- **Custom Styling**: Vox-inspired colour scheme with vibrant yellow accents
- **Smooth Animations**: Dual sequential animations including a growing yellow border and hand-drawn highlighter effect

## Tech Stack

- **React 19** - Component-based UI library
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern features (CSS Grid, Flexbox, animations)
- **ESLint** - Code quality and consistency

## Key Features

### Responsive Design
The layout adapts across device sizes:
- Desktop (1200px+): Three-column news grid, full hero
- Tablet (768px-1199px): Two-column grid, adjusted spacing
- Mobile (<768px): Single column, stacked search form

### Interactive Animations
- Yellow border grows from bottom to top on page load (1.2s)
- Hand-drawn highlighter sweeps across featured text (1.5s, starts after border)
- Hover effects on cards and headlines
- Smooth transitions throughout

### Component Architecture
The application is structured using React best practices:
- Reusable components (Header, Hero, NewsGrid, NewsCard)
- Props-based data flow
- Separation of concerns (CSS modules per component)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Lona44/Mission-Ready-L5---AI-Powered-Advanced-Full-Stack-Developer-Accelerator.git
cd Mission-Ready-L5---AI-Powered-Advanced-Full-Stack-Developer-Accelerator/Mission-0
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`


## Project Structure

```
marketing-association-nz/
├── public/
│   └── favicon.svg              # Custom yellow megaphone favicon
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero/
│   │       │   └── hero_04.png  # Hero background image
│   │       └── news/
│   │           ├── news_card_001.webp
│   │           ├── news_card_002.webp
│   │           └── news_card_003.webp
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── NewsCard/
│   │   │   ├── NewsCard.jsx
│   │   │   └── NewsCard.css
│   │   └── NewsGrid/
│   │       ├── NewsGrid.jsx
│   │       └── NewsGrid.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Design Decisions

### CSS Custom Properties for Brand Consistency

All colours and fonts are defined as CSS variables in `index.css:30-43`, making the entire design system centralised and maintainable.

**Why CSS Variables?**

Using CSS custom properties (variables) instead of hardcoded values provides several benefits:
- **Single source of truth** - Change `--vox-yellow` in one place, updates everywhere
- **Easy rebranding** - Client wants a different accent colour? Change one line, not 50+ instances
- **Semantic naming** - `var(--vox-yellow)` is clearer than `#ffeb00` when reading code
- **Theme switching** - Could add dark mode by overriding variables in a media query

**Variable Definitions (index.css:30-43)**

```css
:root {
  /* Typography Families */
  --font-sans: 'Work Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-serif: 'Lora', Georgia, serif;
  --font-display: 'Playfair Display', Georgia, serif;

  /* Color Palette - Vox-inspired */
  --vox-yellow: #ffeb00;        /* Primary accent color */
  --vox-bg-light: #f1f3f2;      /* Light gray background */
  --vox-text-dark: #1a1a1a;     /* Primary text color */
  --vox-text-medium: #4c4e4d;   /* Secondary text color */
  --vox-gray: #bbbbbb;          /* Gray accent */
  --vox-gray-light: #aaaaaa;    /* Light gray accent */
  --vox-white: #ffffff;         /* White */
}
```

**Usage Example**

Instead of hardcoding colours:
```css
/* Bad - hardcoded values scattered everywhere */
.search-button:hover {
  background-color: #ffeb00;
  color: #1a1a1a;
}
```

We use semantic variables:
```css
/* Good - semantic, maintainable, consistent */
.search-button:hover {
  background-color: var(--vox-yellow);
  color: var(--vox-text-dark);
}
```

**Real-World Benefits**

These variables are used throughout the application:
- **Header** - Yellow background (`--vox-yellow`), dark text (`--vox-text-dark`)
- **Hero** - Yellow border animation, yellow highlighter effect
- **News Cards** - Yellow border on hover, consistent text colours
- **Typography** - Font families applied consistently via `var(--font-serif)` and `var(--font-sans)`

If Marketing Association NZ decides to change their brand colour tomorrow, I update one variable and the entire site updates instantly.

---

### Colour Palette
The project uses a Vox-inspired colour scheme:
- Primary Yellow: `#ffeb00` (vibrant accent colour)
- Dark Text: `#1a1a1a` (high contrast for readability)
- Light Background: `#f1f3f2` (soft grey for sections)
- White: `#ffffff` (clean backgrounds)

### Typography

The site uses a carefully selected font hierarchy imported from Google Fonts (index.css:16):

**Font Families:**
- **Work Sans** (Sans-serif) - Primary font for most content
  - All headings (h1-h6)
  - Navigation links
  - Default body text
  - Used via `var(--font-sans)`

- **Lora** (Serif) - Readable body text for articles
  - Hero paragraph text (Hero.css:161)
  - News card descriptions (NewsCard.css:97)
  - Used via `var(--font-serif)`

- **Playfair Display** (Decorative Serif) - Brand identity
  - "Manz" logo text only (Header.css:58)
  - Bold, italic styling for editorial feel
  - Used via `var(--font-display)`

- **Helvetica Neue** (System Font) - UI elements
  - Search input and button (Hero.css:203, 222)
  - Author bylines (NewsCard.css:85)
  - Not from Google Fonts, uses system fallback

**Why This Combination?**
- **Work Sans** provides clean, modern readability for UI and headings
- **Lora** offers serif elegance for longer-form content, improving readability
- **Playfair Display** creates a distinctive, editorial brand identity
- **Helvetica Neue** gives UI elements a crisp, native feel

### Responsive Breakpoints
- Mobile: max-width 768px
- Tablet: 769px to 1199px
- Desktop: 1200px and above

---

### CSS Pseudo-Elements for Visual Effects

Pseudo-elements create virtual DOM elements through CSS alone, keeping the HTML clean while adding visual complexity. This project uses both `::before` and `::after` pseudo-elements extensively.

**What are Pseudo-Elements?**

Pseudo-elements are CSS-generated content that acts like real HTML elements but doesn't exist in the source code. They're created entirely by CSS and can be styled, positioned, and animated like regular elements.

**Syntax:**
- `::before` - Creates content before the element's actual content
- `::after` - Creates content after the element's actual content

Both require a `content` property (even if empty: `content: ''`) to render.

---

#### Usage in This Project

**1. Yellow Border Animation** (Hero.css:91-101)

```css
.hero-text h1::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 6px;
  height: 100%;
  background-color: var(--vox-yellow);
  transform-origin: bottom;
  animation: borderGrow 1.2s ease-out;
}
```

**Purpose:** Creates the animated yellow vertical border on the left of the headline without adding `<div>` tags to the HTML. The pseudo-element animates from 0 height to 100% height on page load.

---

**2. Highlighter Marker Effect** (Hero.css:126-143)

```css
.highlight-text::before {
  content: '';
  position: absolute;
  left: -0.1em;
  bottom: 0.05em;
  width: calc(100% + 0.2em);
  height: 65%;
  background-color: rgba(255, 235, 0, 0.7);
  z-index: -1;                           /* Behind text */
  transform: scaleX(0) skewX(-3deg);
  border-radius: 2px;
  animation: highlightSweep 1.5s ease-out 1s forwards;
}
```

**Purpose:** Creates the yellow highlighter effect behind "Explainer Series:" text. Uses `z-index: -1` to position it behind the text and animates with a diagonal skew for a hand-drawn feel.

---

**3. Navigation Link Underlines** (Header.css:129-141)

```css
.nav-list a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;                              /* Starts at 0 width */
  height: 1px;
  background-color: var(--vox-text-dark);
}

.nav-list a:hover::after {
  width: 100%;                           /* Expands to full width on hover */
}
```

**Purpose:** Creates animated underlines that expand from left to right on hover. The underline starts at 0 width and transitions to 100% when the link is hovered.

---

**4. Disabling Pseudo-Elements** (Header.css:158-160)

```css
.login-btn::after {
  display: none;                         /* Disable underline animation for button */
}
```

**Purpose:** The Login button inherits the `::after` underline from `.nav-list a`, but we don't want it on the button styling. Setting `display: none` removes it while keeping the button's other styles.

---

**Benefits of Using Pseudo-Elements:**

1. **Cleaner HTML** - No extra `<span>` or `<div>` tags just for visual effects
2. **Separation of concerns** - Visual effects stay in CSS, structure stays in HTML
3. **Easier maintenance** - Add/remove effects by changing CSS only
4. **Performance** - Pseudo-elements are lightweight and don't bloat the DOM

---

### Z-Index Layering Strategy

Z-index controls the stacking order of positioned elements. Lower values are further back, higher values are further forward in the visual stack.

**Z-Index Scale Used:**
- `z-index: -1` - Behind content (highlighter effect)
- `z-index: 0` - Default layer (overlays)
- `z-index: 1` - Above overlays (content)
- `z-index: 1000` - Always on top (header)

---

#### Layering in This Project

**1. Header Always on Top** (Header.css:17)

```css
.header {
  position: sticky;
  top: 0;
  z-index: 1000;                         /* Ensures header stays above other content */
}
```

**Why:** The sticky header needs the highest z-index to remain visible when scrolling over other content.

---

**2. Hero Section Stacking** (Hero.css:37, 57, 126, 139, 181)

```css
/* Layer 1 (back) - White hover overlay */
.hero::before {
  z-index: 0;                            /* Behind content */
}

/* Layer 2 (middle) - Hero content and search */
.hero-content {
  z-index: 1;                            /* Above overlay */
}

.search-container {
  z-index: 1;                            /* Above overlay */
}

/* Layer 3 (middle) - Highlighted text wrapper */
.highlight-text {
  z-index: 1;
}

/* Layer 0 (behind text) - Yellow highlighter */
.highlight-text::before {
  z-index: -1;                           /* Behind text */
}
```

**Visual Stack (back to front):**
```
┌─────────────────────────┐
│  z-index: 1000          │ ← Header (highest)
├─────────────────────────┤
│  z-index: 1             │ ← Hero content, search, text
├─────────────────────────┤
│  z-index: 0             │ ← Hero white overlay
├─────────────────────────┤
│  z-index: -1            │ ← Yellow highlighter (lowest)
└─────────────────────────┘
```

**Why This Matters:**

The highlighter effect only works because of precise z-index control:
- Text has `z-index: 1` (foreground)
- Highlighter has `z-index: -1` (background)
- Result: Yellow highlight appears behind the text, creating the marker effect

Without z-index layering, the highlighter would appear on top of the text, making it unreadable.

---

**Combining Pseudo-Classes and Pseudo-Elements:**

```css
.nav-list a:hover::after {
  width: 100%;
}
```

This selector combines:
- `a` - The link element
- `:hover` - Pseudo-class (selects existing element in hover state)
- `::after` - Pseudo-element (selects virtual element created by CSS)

**Difference:**
- **Pseudo-classes** (`:hover`, `:focus`) - Select existing elements in special states (single colon)
- **Pseudo-elements** (`::before`, `::after`) - Create new virtual elements (double colon)

---

### CSS Keyframe Animations

Keyframe animations define custom motion sequences that bring the hero section to life. Unlike CSS transitions (which animate between two states on interaction), keyframe animations run automatically and can have multiple steps.

**What are Keyframe Animations?**

A `@keyframes` rule defines what should happen at specific points during the animation:
- You name the animation (like `borderGrow` or `highlightSweep`)
- You specify keyframe steps using percentages (0%, 50%, 100%) or keywords (`from`, `to`)
- You define CSS properties at each step
- You apply the animation to an element using the `animation` property

**Basic Syntax:**
```css
/* Define the animation */
@keyframes animationName {
  from {
    /* Starting state */
  }
  to {
    /* Ending state */
  }
}

/* Apply it to an element */
.element {
  animation: animationName duration timing-function delay fill-mode;
}
```

---

#### Keyframe Animations in This Project

This project defines **2 custom keyframe animations** that create the sequential hero effect.

---

**1. Border Grow Animation** (Hero.css:109-116)

This animation makes the yellow vertical border grow from bottom to top when the page loads.

```css
@keyframes borderGrow {
  from {
    height: 0;              /* Starts invisible (0 height) */
  }
  to {
    height: 100%;           /* Grows to full height of h1 */
  }
}
```

**Applied to the border pseudo-element (Hero.css:96-106):**
```css
.hero-text h1::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 6px;
  height: 100%;                          /* Final height (animation overrides this) */
  background-color: var(--vox-yellow);
  transform-origin: bottom;              /* Grows upward from bottom */
  animation: borderGrow 1.2s ease-out;   /* 1.2 second animation */
}
```

**How It Works:**
- The animation starts at 0 height (invisible)
- Over 1.2 seconds, the height increases to 100% (full height of the h1)
- `transform-origin: bottom` makes it grow upward from the bottom edge
- `ease-out` timing means it starts fast and slows down at the end

---

**2. Highlighter Sweep Animation** (Hero.css:151-158)

This animation creates the hand-drawn yellow highlighter effect that sweeps across "Explainer Series:" text from left to right.

```css
@keyframes highlightSweep {
  from {
    transform: scaleX(0) skewX(-3deg);   /* Width 0, diagonal angle */
  }
  to {
    transform: scaleX(1) skewX(-3deg);   /* Full width, maintains diagonal */
  }
}
```

**Applied to the highlighter pseudo-element (Hero.css:131-143):**
```css
.highlight-text::before {
  content: '';
  position: absolute;
  left: -0.1em;
  bottom: 0.05em;
  width: calc(100% + 0.2em);
  height: 65%;
  background-color: rgba(255, 235, 0, 0.7);
  z-index: -1;                                       /* Behind text */
  transform-origin: left center;                     /* Grows from left */
  transform: scaleX(0) skewX(-3deg);                 /* Starting state */
  border-radius: 2px;
  animation: highlightSweep 1.5s ease-out 1s forwards;
  /*      [name]         [duration] [timing] [delay] [fill-mode] */
}
```

**Animation Breakdown:**
- **1.5s** - Animation duration (slowed from 0.8s for more deliberate effect)
- **ease-out** - Starts fast, slows down at end (feels more natural)
- **1s** - Delay before starting (waits for border to mostly complete)
- **forwards** - Keeps final state after animation completes (highlighter stays visible)

**How It Works:**
- Starts at `scaleX(0)` which means 0% width (invisible)
- Grows to `scaleX(1)` which means 100% width (full text width)
- Maintains the `-3deg` diagonal skew throughout for hand-drawn feel
- `transform-origin: left center` makes it grow from left to right

---

**3. Responsive Variant for Mobile** (Hero.css:270-277)

On mobile devices, the highlighter animation is redefined with less diagonal skew for better readability on small screens.

```css
@media (max-width: 768px) {
  .highlight-text::before {
    transform: scaleX(0) skewX(-2deg);     /* Less diagonal - was -3deg on desktop */
    height: 60%;                           /* Slightly shorter - was 65% on desktop */
  }

  /* Redefine keyframes for mobile */
  @keyframes highlightSweep {
    from {
      transform: scaleX(0) skewX(-2deg);   /* -2deg instead of -3deg */
    }
    to {
      transform: scaleX(1) skewX(-2deg);   /* Maintains -2deg diagonal */
    }
  }
}
```

**Why Redefine?**
A 3-degree skew looks dramatic on desktop but too extreme on a 375px phone screen. The 2-degree variant maintains the hand-drawn aesthetic while improving readability.

---

**Sequential Animation Timeline**

The two animations are coordinated to create a smooth sequence:

```
Page Load
    ↓
0.0s ──────────────────► 1.2s    borderGrow animation
         (yellow border grows)

1.0s ──────────────────────────► 2.5s    highlightSweep animation
              (highlighter sweeps)

        ↑
    0.2s overlap creates smooth handoff
```

**Why Sequential?**
- Running both animations simultaneously would compete for attention
- The 1-second delay on the highlighter creates a deliberate, polished sequence
- The 0.2-second overlap prevents an awkward pause between animations

---

**Keyframes vs CSS Variables**

**I had to remind myself that Keyframes are NOT variables** - they're animation definitions. You can't use them like `var(--keyframe-name)`.

**Keyframes:**
```css
/* Defines motion sequence */
@keyframes borderGrow {
  from { height: 0; }
  to { height: 100%; }
}

/* Applied via animation property */
.element {
  animation: borderGrow 1.2s ease-out;
}
```

**CSS Variables:**
```css
/* Defines reusable value */
:root {
  --vox-yellow: #ffeb00;
}

/* Applied via var() function */
.element {
  background-color: var(--vox-yellow);
}
```

---

**Why Create Custom Keyframe Animations?**

1. **Brand differentiation** - Standard CSS properties (hover effects, transitions) are common. Custom animations make the site feel unique and polished (like Vox's style).

2. **Sequential storytelling** - The border + highlighter sequence draws attention to the hero headline in a deliberate, editorial way that matches the news industry aesthetic.

3. **Performance** - Animating `transform` properties (like `scaleX` and `skewX`) is hardware-accelerated by the browser, making animations smooth even on lower-end devices.

4. **Maintainability** - Defining animations once in `@keyframes` means I can reuse them on multiple elements or adjust timing globally without changing every instance.

---

## Challenges and Solutions

During development, I encountered several technical challenges that required creative problem-solving. Here's a detailed breakdown of each issue, why it happened, and how I solved it.

### Challenge 1: Text Wrapping Breaking the Highlighter Effect

**The Problem**

At certain screen widths (around 768px to 1024px), the headline "Explainer Series: WTH is Ad Context Protocol" would sometimes break between "Explainer" and "Series:", causing the yellow highlighter effect to split across two lines. This looked unprofessional and broke the visual impact of the animation.

When text wraps to a new line mid-phrase, the CSS highlighter effect (created with a pseudo-element) splits awkwardly because it can only create a single rectangular shape.

**Why It Happened**

The browser's default behaviour is to wrap text when it runs out of horizontal space. When the headline text got too long for the available width, the browser would insert a line break at the nearest space character, which happened to be between "Explainer" and "Series:".

The highlighter effect was positioned relative to the `<span>` element containing "Explainer Series:", but CSS positioning doesn't work well when inline elements wrap across multiple lines. The pseudo-element `::before` (which creates the yellow highlighter rectangle) can only create one rectangular shape, not follow text across line breaks.

**The Solution**

I added a single CSS property to prevent the text from wrapping:

```css
/* Before - Text could wrap */
.highlight-text {
  position: relative;
  display: inline-block;
  z-index: 1;
}

/* After - Text stays together */
.highlight-text {
  position: relative;
  display: inline-block;
  z-index: 1;
  white-space: nowrap;  /* This prevents "Explainer Series:" from splitting */
}
```

**What This Does**

The `white-space: nowrap` property tells the browser: "No matter how narrow the screen gets, don't insert a line break inside this element." This ensures "Explainer Series:" always stays on one line, keeping the highlighter effect intact.

**Trade-off Considered**

On very narrow screens, this could potentially cause horizontal scrolling. However, since "Explainer Series:" is relatively short (only 17 characters), and we constrain the hero text to 66% width on mobile, this hasn't been an issue in testing.

---

### Challenge 2: Creating Sequential Animations

**The Problem**

I wanted the yellow border to grow first, then have the highlighter sweep across second, creating a dynamic sequential effect that draws the eye. This is more visually engaging than both animations starting simultaneously.

Initially, both animations started at the same time (when the page loaded), which made the effect feel cluttered and less impactful. The animations competed for attention rather than working together in sequence.

**Why It Happened**

By default, CSS animations start immediately when the page loads. Both my border animation and highlighter animation were set to begin at `0s` (immediately), so they ran simultaneously:

```css
/* Both animations starting at the same time - not ideal */
.hero-text h1::before {
  animation: borderGrow 1.2s ease-out;  /* Starts at 0s */
}

.highlight-text::before {
  animation: highlightSweep 0.8s ease-out;  /* Also starts at 0s */
}
```

**The Solution**

I used the `animation-delay` property to create a sequence. The border grows first, then after 1 second, the highlighter starts:

```css
/* Yellow border - starts immediately */
.hero-text h1::before {
  animation: borderGrow 1.2s ease-out;
  /* No delay - starts at 0s */
}

/* Highlighter - waits 1 second before starting */
.highlight-text::before {
  animation: highlightSweep 1.5s ease-out 1s forwards;
  /* 1s delay means it starts after the border is mostly complete */
}
```

**Timeline Breakdown**

- **0.0s - 1.2s**: Yellow border grows from bottom to top
- **1.0s - 2.5s**: Highlighter sweeps left to right (starts while border finishes)
- **Result**: Smooth handoff between animations with slight overlap for polish

**Why 1 Second Delay?**

The border animation runs for 1.2 seconds. By starting the highlighter at 1 second, there's a 0.2-second overlap where both are animating. This overlap creates a smooth transition rather than an awkward pause between animations.

**The `forwards` Keyword**

Notice the `forwards` keyword at the end of the animation shorthand. This tells the browser to keep the final state of the animation after it completes. Without it, the highlighter would disappear after sweeping across, reverting to its invisible starting state.

---

### Challenge 3: Preventing Layout Shift on Hover (Border Width Problem)

**The Problem**

When hovering over a news card, the text inside the card would shift slightly to the right. This was caused by the border width changing on hover, which pushed the content around and created a jarring visual effect. The card had multiple hover effects (lift animation, shadow enhancement, and border colour change), but it was specifically the border width change that caused the layout shift.

**Why It Happened**

Borders are part of the CSS box model and take up physical space. When you change a border's width, you're changing the actual dimensions of the element, which causes the browser to recalculate the layout. This forces any content inside the element to reposition to accommodate the new border size.

The initial implementation was likely changing the border width on hover (for example, from 2px to 4px, or adding a border where there wasn't one before). Even a 2px difference is enough to cause visible text shifting.

**The Solution**

The fix was to set the border width to 4px in both states (default and hover), and only animate the colour property. This keeps the dimensions of the card constant, preventing any layout recalculation.

```css
/* Fixed approach - border width stays constant */
.news-card {
  border-left: 4px solid rgba(255, 187, 0, 0.3); /* Faint yellow, 30% opacity */
  transition: all 0.2s ease;
}

.news-card-link:hover .news-card {
  transform: translateY(-2px);              /* Lift card */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); /* Enhanced shadow */
  border-left-color: var(--vox-yellow);      /* Only colour changes, NOT width */
}
```

**Why This Works**

The key is using the `border-left-color` property instead of redefining the entire `border-left` shorthand. This property only modifies the colour value while leaving the width (4px) and style (solid) unchanged.

Other hover effects like `transform: translateY(-2px)` and `box-shadow` don't cause layout shift because:
- **Transforms** move elements visually but don't affect the document flow or layout
- **Box shadows** are painted outside the element's box model and don't take up layout space

**Result**

- Default state: Subtle yellow border at 4px width with 30% opacity
- Hover state: Vibrant yellow border, still 4px width
- The border width never changes, so the text position remains stable
- Smooth 0.2s transition between colours
- Zero layout shift or text jumping

---

### Challenge 4: Implementing Responsive Breakpoints Across Multiple Layout Techniques

**The Problem**

The website needed to work seamlessly across desktop (1200px+), tablet (768px-1024px), and mobile (<768px) devices. This required different layouts at each breakpoint: the news grid needed to transform from 3 columns to 2 to 1, the search form needed to stack vertically on mobile, and text sizes needed to scale down without breaking the design. The challenge was coordinating these changes across multiple CSS techniques (Grid, Flexbox, and traditional box model) while maintaining visual consistency.

**Why Responsive Design is Complex**

Responsive design isn't just about shrinking things. Different screen sizes require fundamentally different layouts:
- **Desktop users** can see multiple cards side-by-side and scan horizontally
- **Mobile users** need content stacked vertically with larger touch targets
- **Tablet users** fall somewhere in between and often get overlooked

Each breakpoint decision affects user experience, and choosing the wrong breakpoint can make your site look broken at common device sizes.

**Breakpoint Strategy**

I chose two main breakpoints based on common device widths:
- **768px** - The boundary between mobile phones and tablets (most phones are 360-428px wide)
- **1024px** - The boundary between tablets and desktops (iPad is 768-1024px)

**Implementation Breakdown**

### 1. News Grid Layout (NewsGrid.css:28-52)

The news grid was the most complex responsive element, requiring different column counts at each breakpoint.

```css
/* Desktop (default) - 3 columns side by side */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);    /* 3 equal columns */
  gap: 2rem;
  max-width: 1200px;
}

/* Tablet - 2 columns for better readability */
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns */
  }
}

/* Mobile - Stack vertically */
@media (max-width: 768px) {
  .news-grid-section {
    padding: 4.5rem 1.5rem 3rem 1.5rem;
  }

  .news-grid {
    grid-template-columns: 1fr;             /* 1 column - vertical stack */
    gap: 1.5rem;                            /* Tighter gap on mobile */
  }
}
```

**Why CSS Grid Here**: Grid automatically handles equal-width columns and spacing. The `repeat()` function makes it easy to change column counts at different breakpoints without recalculating widths.

---

### 2. Search Form Stack (Hero.css:284-297)

The search form needed to transform from horizontal (desktop) to vertical (mobile) to accommodate narrow screens.

```css
/* Desktop - search input and button side by side */
.search-form {
  display: flex;
  gap: 0;                                   /* Buttons touch */
  max-width: 600px;
}

.search-input {
  border-radius: 2px 0 0 2px;              /* Rounded left corners only */
  border-right: none;                       /* Connect to button */
}

.search-button {
  border-radius: 0 2px 2px 0;              /* Rounded right corners only */
}

/* Mobile - stack vertically for easier tapping */
@media (max-width: 768px) {
  .search-form {
    flex-direction: column;                 /* Stack vertically */
    gap: 0.5rem;                           /* Add gap between stacked items */
  }

  .search-input {
    border-radius: 2px;                    /* Full border radius when stacked */
    border: 2px solid var(--vox-bg-light);
  }

  .search-button {
    border-radius: 2px;                    /* Full border radius when stacked */
    width: 100%;                           /* Full width for easier tapping */
  }
}
```

**Why This Matters**: On mobile, a horizontal search form would be cramped. Stacking vertically makes both elements full-width and easier to tap with thumbs. Notice the border-radius changes to account for the new layout.

---

### 3. Responsive Typography (Hero.css:249-281)

Text sizes needed to shrink on mobile to prevent awkward line breaks and maintain readability.

```css
/* Desktop */
.hero-text h1 {
  font-size: 3rem;                         /* 48px - large and impactful */
  padding-left: 1.5rem;
}

.hero-text p {
  font-size: 1.1rem;
  padding-left: 1.5rem;
}

/* Mobile - smaller text for narrow screens */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.2rem;                     /* 35.2px - scaled down */
    padding-left: 1rem;
  }

  .hero-text p {
    font-size: 1rem;
    padding-left: 1rem;
  }

  /* Text constrained to 66% width for readability over background */
  .hero-text {
    max-width: 66%;
  }
}
```

**The Readability Trade-off**: On mobile, the hero text is constrained to 66% width (not full width) to ensure text remains readable over the background image. This prevents long lines of text that are hard to scan.

---

### 4. Animation Adjustments (Hero.css:255-272)

Even the animations needed responsive adjustments to look proportional on smaller screens.

```css
/* Desktop - 6px border, 3deg diagonal skew */
.hero-text h1::before {
  width: 6px;
}

.highlight-text::before {
  transform: scaleX(0) skewX(-3deg);
  height: 65%;
}

/* Mobile - thinner border, less diagonal skew */
@media (max-width: 768px) {
  .hero-text h1::before {
    width: 4px;                            /* Thinner border on smaller screens */
  }

  .highlight-text::before {
    transform: scaleX(0) skewX(-2deg);     /* Less diagonal - looks better on mobile */
    height: 60%;                           /* Slightly shorter */
  }
}
```

**Why Adjust Animations**: A 6px border looks proportional on desktop but too chunky on a small phone screen. Similarly, a steep 3-degree skew on the highlighter looks dramatic on desktop but awkward on mobile.

---

### 5. Header Navigation Transformation (Header.css:173-212)

The navigation needed to completely restructure on mobile to fit the narrow screen.

```css
/* Desktop - horizontal navigation */
.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Mobile - hamburger menu and vertical stack */
@media (max-width: 768px) {
  .header-container {
    padding: 1rem;
  }

  .nav-list {
    flex-direction: column;                /* Stack vertically */
    gap: 1rem;                            /* Tighter gap */
  }

  /* Additional mobile menu styles would go here */
}
```

---

**Key Takeaways**

1. **Multiple breakpoints are essential** - 768px and 1024px cover the major device categories
2. **Different layout techniques for different problems** - Grid for equal columns, Flexbox for directional changes
3. **Everything needs adjustment** - Not just layout, but typography, spacing, borders, and even animations
4. **Mobile isn't just smaller desktop** - It requires rethinking the entire interface (stacking, full-width buttons, etc.)
5. **Readability drives decisions** - The 66% width constraint on mobile hero text prioritizes user experience over aesthetics

**Testing Approach**

I tested at specific widths:
- **375px** - iPhone SE (smallest common phone)
- **768px** - iPad portrait (tablet breakpoint)
- **1024px** - iPad landscape (desktop breakpoint)
- **1440px** - Common desktop size

This ensured the design looked correct at the most common device sizes, not just arbitrary breakpoints.

---

## React Concepts Used

This project demonstrates several core React concepts. Here's what each one means and where it's used in the code.

### 1. Components (Building Blocks)

**What are Components?**
Components are reusable pieces of UI. Think of them like LEGO blocks, each component is self-contained and can be used multiple times. In React, components are JavaScript functions that return JSX (HTML-like syntax).

**Example from this project (NewsCard.jsx:16-66):**
```jsx
const NewsCard = ({ title, description, image, author, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="news-card-link">
      <article className="news-card">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <p className="card-author">{author}</p>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </article>
    </a>
  );
};
```

**Why this matters:** This NewsCard component can be reused three times (once for each news article) without duplicating code. Each instance gets different data via props.

---

### 2. Props (Passing Data Down)

**What are Props?**
Props (short for "properties") are how you pass data from a parent component to a child component. It's like passing arguments to a function.

**Example from this project (NewsGrid.jsx:55-64):**
```jsx
// Parent component (NewsGrid) passes data to child (NewsCard)
{newsItems.map((item) => (
  <NewsCard
    key={item.id}
    title={item.title}              // Prop: article title
    description={item.description}  // Prop: article description
    author={item.author}            // Prop: author name
    image={item.image}              // Prop: image file
    url={item.url}                  // Prop: article URL
  />
))}
```

**How the child receives props (NewsCard.jsx:16):**
```jsx
// Destructuring props in the function parameters
const NewsCard = ({ title, description, image, author, url }) => {
  // Now we can use {title}, {description}, etc. inside the component
  return <h3 className="card-title">{title}</h3>
}
```

**Why this matters:** Props make components flexible. The same NewsCard component displays different content based on what props you pass it.

---

### 3. State (Managing Data That Changes)

**What is State?**
State is data that can change over time. When state changes, React automatically re-renders the component to show the updated data. We use the `useState` hook to create state.

**Example from this project (Hero.jsx:17-18):**
```jsx
import { useState } from 'react';

const Hero = () => {
  // useState returns [currentValue, functionToUpdateValue]
  const [searchTerm, setSearchTerm] = useState('');

  // searchTerm = current value of the input (starts as empty string '')
  // setSearchTerm = function to update searchTerm
```

**How state updates (Hero.jsx:51-56):**
```jsx
<input
  type="text"
  placeholder="Search for news, articles, and insights..."
  value={searchTerm}                           // Display current state
  onChange={(e) => setSearchTerm(e.target.value)}  // Update state when user types
  className="search-input"
/>
```

**Why this matters:** Every time the user types in the search box, `setSearchTerm` updates the state, and React automatically updates the input to show what they typed. This is called "controlled components".

---

### 4. JSX (HTML in JavaScript)

**What is JSX?**
JSX looks like HTML but it's actually JavaScript. It lets you write UI markup directly in your JavaScript code. The browser can't understand JSX, so Vite converts it to regular JavaScript.

**Example from this project (Hero.jsx:33-64):**
```jsx
return (
  <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
    <div className="hero-content">
      <a href="https://digiday.com/..." className="hero-text">
        <h1><span className="highlight-text">Explainer Series:</span> WTH is Ad Context Protocol</h1>
      </a>
    </div>
  </section>
);
```

**Key differences from HTML:**
- Use `className` instead of `class` (because `class` is a reserved word in JavaScript)
- Use `style={{ property: value }}` for inline styles (double curly braces)
- Use `{variableName}` to insert JavaScript expressions
- Self-closing tags must have `/` (like `<img />`)

---

### 5. Array Mapping (Rendering Lists)

**What is `.map()`?**
The `.map()` method transforms an array of data into an array of JSX components. It's how you render lists in React.

**Example from this project (NewsGrid.jsx:23-48, 55-64):**
```jsx
// Array of news article data
const newsItems = [
  {
    id: 1,
    title: "WTF is IAB Tech Lab's Concurrent Streams API?",
    description: "This week's Future of TV Briefing...",
    author: "TIM PETERSON",
    image: newsImage1,
    url: "https://digiday.com/..."
  },
  // ... more items
];

// Transform array into JSX components
{newsItems.map((item) => (
  <NewsCard
    key={item.id}        // Required: unique identifier for each item
    title={item.title}
    description={item.description}
    author={item.author}
    image={item.image}
    url={item.url}
  />
))}
```

**Why this matters:** Instead of writing `<NewsCard />` three times manually, `.map()` automatically creates as many NewsCard components as there are items in the array. If you add a 4th article to the array, a 4th card appears automatically.

**The `key` prop:** React needs `key={item.id}` to track which items change, are added, or are removed. It improves performance and prevents bugs.

---

### 6. Event Handlers (Responding to User Actions)

**What are Event Handlers?**
Event handlers are functions that run when users interact with your UI (clicking, typing, hovering, etc.).

**Example from this project (Hero.jsx:26-30, 50-61):**
```jsx
// Define the event handler function
const handleSearch = (e) => {
  e.preventDefault();  // Prevent form from refreshing the page
  console.log('Search term:', searchTerm);
};

// Attach it to the form's onSubmit event
<form onSubmit={handleSearch} className="search-form">
  <input
    type="text"
    onChange={(e) => setSearchTerm(e.target.value)}  // Inline event handler
    className="search-input"
  />
  <button type="submit" className="search-button">SEARCH</button>
</form>
```

**Common events:**
- `onClick` - User clicks something
- `onChange` - Input value changes
- `onSubmit` - Form is submitted
- `onHover` - Mouse hovers over element

---

### 7. Imports and Exports (Organizing Code)

**What are Imports/Exports?**
They let you split your code into separate files and share code between them.

**Example from this project (NewsGrid.jsx:1-6):**
```jsx
// Import other components
import NewsCard from '../NewsCard/NewsCard';

// Import CSS
import './NewsGrid.css';

// Import images
import newsImage1 from '../../assets/images/news/news_card_001.webp';
import newsImage2 from '../../assets/images/news/news_card_002.webp';
import newsImage3 from '../../assets/images/news/news_card_003.webp';
```

**Exporting the component (NewsGrid.jsx:71):**
```jsx
export default NewsGrid;
```

**Why this matters:** Each component lives in its own file with its own CSS. This keeps code organized and makes it easy to find and update specific components.

---

### 8. Component Composition (Building Complex UIs)

**What is Component Composition?**
Building complex UIs by combining smaller components together. It's like building with LEGO, small pieces combine to make bigger structures.

**Example from this project (App.jsx:8-14):**
```jsx
function App() {
  return (
    <>
      <Header />      {/* Navigation bar */}
      <Hero />        {/* Main hero section */}
      <NewsGrid />    {/* Grid of 3 NewsCards */}
    </>
  )
}
```

**The component hierarchy:**
```
App
├── Header
├── Hero
└── NewsGrid
    ├── NewsCard (article 1)
    ├── NewsCard (article 2)
    └── NewsCard (article 3)
```

**Why this matters:** Breaking the UI into small components makes code easier to understand, test, and maintain. Each component has one job and does it well.

---

### Quick Reference: React Concepts in This Project

| Concept | Files Using It | What It Does |
|---------|---------------|--------------|
| **Components** | All .jsx files | Reusable UI building blocks |
| **Props** | NewsCard, NewsGrid | Pass data from parent to child |
| **State** | Hero.jsx | Track data that changes (search input) |
| **JSX** | All .jsx files | Write HTML-like syntax in JavaScript |
| **Array Mapping** | NewsGrid.jsx | Render lists from arrays |
| **Event Handlers** | Hero.jsx | Respond to user interactions |
| **Imports/Exports** | All files | Organize code across files |
| **Composition** | App.jsx | Combine small components into larger UI |
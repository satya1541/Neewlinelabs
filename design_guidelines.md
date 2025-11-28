# NewLineLabs Website Design Guidelines

## Design Approach: Reference-Based Innovation

Drawing inspiration from Linear's bold typography, Stripe's sophisticated color usage, and Vercel's futuristic minimalism while creating a distinct identity that breaks from tech industry clichés.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Primary Brand: **280 65% 55%** (Deep Electric Violet - futuristic, innovative)
- Primary Dark: **280 70% 45%** (Rich Purple - depth and authority)
- Background Dark: **240 15% 8%** (Near Black with blue undertone)
- Background Light: **0 0% 98%** (Clean white)

**Accent Colors:**
- Accent Vivid: **165 75% 50%** (Emerald Teal - energy and innovation)
- Accent Warm: **25 85% 60%** (Vibrant Coral - approachability)

**Neutrals:**
- Text Dark: **240 10% 15%**
- Text Light: **0 0% 95%**
- Border Subtle: **240 10% 20%** (dark mode) / **240 5% 85%** (light mode)

**Implementation Note:** Use dark mode by default with violet-to-teal gradients sparingly for hero and key CTAs. Avoid blue entirely.

### B. Typography

**Font Families:**
- Headlines: Inter (700-800 weight) - modern, technical precision
- Body: Inter (400-500 weight) - excellent readability
- Accent/Mono: JetBrains Mono (for technical details, code snippets)

**Scale:**
- Hero H1: text-6xl md:text-7xl lg:text-8xl (bold, space-y-2)
- Section H2: text-4xl md:text-5xl (semibold)
- Card H3: text-2xl md:text-3xl (semibold)
- Body: text-base md:text-lg (leading-relaxed)
- Small: text-sm (technical details, captions)

### C. Layout System

**Spacing Primitives:** Use tailwind units of **4, 8, 12, 16, 20, 24, 32** for consistency
- Component padding: p-8 to p-12
- Section spacing: py-20 to py-32
- Grid gaps: gap-8 to gap-12
- Container: max-w-7xl with px-4 md:px-8

**Grid Strategy:**
- Services: 3-column grid (lg:grid-cols-3)
- Portfolio: 2-column masonry-style (lg:grid-cols-2)
- About/Team: Asymmetric 40/60 split
- Contact: 2-column (form + info map)

### D. Component Library

**Hero Section:**
- Full-screen impact (min-h-screen) with large background image (futuristic tech workspace, circuit boards with purple lighting, or abstract geometric shapes)
- Bold headline with gradient text effect (violet to teal)
- Dual CTA buttons: Primary (filled violet with teal glow on hover) + Secondary (outline with blur backdrop)
- Floating particle animation background (subtle, CSS-based)
- Trust indicators: "Trusted by 500+ businesses" with logo strip

**Services Cards:**
- Glass-morphism effect cards (backdrop-blur with subtle border)
- Custom icons using Heroicons (code, cloud, cpu, device-mobile, chart-bar, megaphone)
- Hover: Lift effect (translate-y-2) with enhanced shadow and accent border glow
- Grid with stagger-in scroll animation

**Portfolio Section:**
- Bento-grid layout with varied card sizes
- Project cards with image overlay, gradient mask on hover revealing details
- Category tags with accent colors
- "View Case Study" CTA with arrow animation

**About Us:**
- Split layout: Left - company narrative with timeline, Right - team photo grid
- Stats counter with animated numbers (projects completed, clients served, years experience)
- Vision statement in oversized quote format

**Contact Form:**
- Floating label inputs with focus glow effect
- Dark input backgrounds with subtle borders
- Submit button with loading state animation
- Right column: Office hours, response time, location map embed, alternative contact methods

**Footer:**
- Three-column layout: Company info + Quick links + Newsletter signup
- Social icons with hover scale effect
- Accent divider line (gradient)
- Copyright and legal links

### E. Animations & Interactions

**Scroll Animations:**
- Fade-up on section entry (50px translate)
- Stagger children by 100ms delay
- Use Intersection Observer, trigger once

**Hover Effects:**
- Buttons: Scale 1.02 + enhanced shadow + subtle glow
- Cards: Translate-y-2 + border accent color shift
- Links: Underline sweep-in from left (gradient)
- Images: Scale 1.05 within container (overflow-hidden)

**Micro-interactions:**
- CTA pulse effect (subtle opacity animation)
- Icon float on service card hover
- Form input focus: border color transition + label lift

**Performance:** CSS transforms only, no layout-shifting animations

## Images

**Hero Section:** Large, high-impact image (1920x1080) - futuristic tech workspace with purple/violet lighting, circuit board close-ups, or abstract 3D geometric shapes. Image should feel innovative and cutting-edge. Use overlay gradient (violet to transparent) for text readability.

**Portfolio Cards:** Project screenshots/mockups (600x400 aspect ratio) with subtle shadows

**About Section:** Team photo or office environment (landscape orientation, natural authentic style)

**Service Icons:** Heroicons library via CDN - select modern, outline style icons

## Accessibility & Performance

- Maintain WCAG AA contrast ratios (check violet on dark backgrounds)
- Focus states: 2px accent ring with offset
- Reduced motion: Disable animations when prefers-reduced-motion
- Lazy load images below fold
- Optimize hero image (WebP format, compressed)
- Mobile-first responsive breakpoints: sm(640), md(768), lg(1024), xl(1280)
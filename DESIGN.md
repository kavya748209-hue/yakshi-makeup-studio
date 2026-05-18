# Design Brief — Makeup by Snehal Pawar and Academy

## Tone & Differentiation
**Premium light luxury aesthetic with warm, elegant, feminine appeal.** Cream ivory backdrop with warm rich brown and soft gold accents. Glassmorphism + balanced blurry glow effects create radiant, sophisticated visual language. Emphasis on beauty, bridal excellence, and artistry through long-form storytelling with advanced 3D animations.

## Palette
| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| **Warm Brown** | `0.5 0.08 30` | `#8b5e3c` | Primary accent, depth, headings |
| **Soft Gold** | `0.6 0.08 40` | `#c9a84c` | Secondary accent, glows, highlights |
| **Rose-Beige** | `0.65 0.06 25` | `#e8c4a0` | Tertiary accent, gentle warmth |
| **Cream BG** | `0.98 0.02 50` | `#fdf6ee` | Page background, light luxury |
| **Card BG** | `0.95 0.03 60` | `#f5e6d3` | Content cards, elevated surfaces |
| **Muted BG** | `0.88 0.02 55` | `#e4d5c0` | Section dividers, subtle layers |
| **Foreground** | `0.25 0.01 25` | `#3d2817` | Text, high contrast |

## Typography
| Layer | Font | Role |
|-------|------|------|
| Display | Instrument Serif (Italic) | Headings, elegant positioning, hero text |
| Body | DM Sans | Body copy, form fields, descriptions |
| Mono | Space Grotesk | Code, numbers, contact details |

## Elevation & Depth
- **L0**: Pure background `0.98 0.02 50` (hero, page base)
- **L1**: Cards `0.95 0.03 60` (services, testimonials, gallery)
- **L2**: Popovers `0.93 0.04 65` (modals, floating panels)
- **Warm gold glow**: `0 0 20px rgba(201, 168, 76, 0.25), 0 0 40px rgba(201, 168, 76, 0.12)` on interactive elements

## Structural Zones
| Zone | BG | Border | Treatment |
|------|----|---------|-----------|
| Header | `bg-card/40` glass | `border-primary/15` | Blurred glassmorphism, sticky floating |
| Hero | `bg-background` | none | Full bleed, 3D canvas with warm glow, premium image |
| Content Sections | `bg-background` → `bg-card` alternating | subtle | Long-form luxury, cards with warm gold glow |
| Floating Buttons | `bg-primary/90` glass | `glow-gold` | Instagram (left), WhatsApp (right), always visible |
| Footer | `bg-card/50` | `border-t border-primary/10` | Maps, contact, refined typography |

## Component Patterns
- **Buttons**: `bg-primary text-primary-foreground glow-gold rounded-md` with hover glow intensification
- **Cards**: `glass-card glow-subtle` with warm border accents (brown→gold)
- **Text Headings**: `text-gradient-gold-rose font-display` with generous leading
- **Testimonials**: `glass-card glow-rose` with italic serif quotes
- **Service Cards**: `glass-card` with icon + title + hover rise animation

## Motion & Animation
- **Scroll**: Motion library scroll-triggered animations (fade-in, slide-up)
- **Hover**: Glow intensification on cards/buttons with warm tone shift
- **Hero**: Floating 3D objects with parallax depth and warm ambient lighting
- **Fade-in**: Staggered section reveals (0.8s ease-out)
- **Float**: Continuous 6s cycle on decorative elements

## Constraints
- Light theme only (no dark mode)
- All images served from `/assets/` folder
- Glow effects use CSS filters + box-shadow with warm OKLCH tones
- Accessible contrast ratios maintained (AA+ on light backgrounds)
- Studio: Makeup by Snehal Pawar and Academy | Location: Kondeshwar Vidyut Colony, Amravati 444607 | Mobile: 09561548151

## Signature Detail
**Warm luxe glow text effect** on hero headlines: `text-gradient-gold-rose` with subtle `blur-glow` filter creates radiant luminescence. Warm brown glow border on service cards pulses gently on interaction. 3D animated objects in hero move with warm ambient lighting and parallax layering for premium visual depth.

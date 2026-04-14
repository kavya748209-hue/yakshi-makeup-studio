# Design Brief — Yakshi Makeup & Nail Studio

## Tone & Differentiation
**Luxury dark aesthetic with premium 3D immersion.** Deep black backdrop with gold/rose-gold accents. Glassmorphism + blurry glow effects create refined, elevated visual language. Emphasis on celebrity credibility and bridal artistry through sophisticated, long-form storytelling.

## Palette
| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| **Gold** | `0.68 0.16 90` | `#d4af37` | Primary accent, glows, CTAs, headings |
| **Rose-Gold** | `0.60 0.08 15` | `#b76e79` | Secondary accent, subtle highlights |
| **Deep BG** | `0.08 0 0` | `#0a0a0a` | Page background, hero depth |
| **Card BG** | `0.13 0 0` | `#1a1a1a` | Content cards, elevated surfaces |
| **Muted BG** | `0.18 0 0` | `#2a2a2a` | Section dividers, subtle layers |
| **Foreground** | `0.95 0 0` | `#f2f2f2` | Text, high contrast |

## Typography
| Layer | Font | Role |
|-------|------|------|
| Display | Instrument Serif (Italic) | Headings, premium positioning, hero text |
| Body | DM Sans | Body copy, form fields, descriptions |
| Mono | Space Grotesk | Code, numbers, technical details |

## Elevation & Depth
- **L0**: Pure background `0.08 0 0` (hero, page base)
- **L1**: Cards `0.13 0 0` (blog, testimonials, services)
- **L2**: Popovers `0.18 0 0` (modals, floating panels)
- **Gold glow**: `0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)` on interactive elements

## Structural Zones
| Zone | BG | Border | Treatment |
|------|----|---------|-----------
| Header | `bg-card/40` glass | `border-primary/20` | Blurred glassmorphism, sticky floating |
| Hero | `bg-background` | none | Full bleed, 3D canvas with moving objects, premium image |
| Content Sections | `bg-background` → `bg-card` alternating | subtle | Long-form luxury, cards with gold glow |
| Floating Buttons | `bg-primary/90` glass | `glow-gold` | Instagram (left), WhatsApp (right), always visible |
| Footer | `bg-card/50` | `border-t border-primary/10` | Maps, contact, refined typography |

## Component Patterns
- **Buttons**: `bg-primary text-primary-foreground glow-gold rounded-md` with hover glow intensification
- **Cards**: `glass-card glow-subtle` with gradient borders (gold→rose-gold)
- **Text Headings**: `text-gradient-gold-rose font-display` with leading spacing
- **Testimonials**: `glass-card glow-rose` with italic serif quotes
- **Service Cards**: `glass-card` with icon + title + hover rise animation

## Motion & Animation
- **Scroll**: Motion library scroll-triggered animations (fade-in, slide-up)
- **Hover**: Glow intensification on cards/buttons
- **Hero**: Floating 3D objects with parallax depth
- **Fade-in**: Staggered section reveals (0.8s ease-out)
- **Float**: Continuous 6s cycle on decorative elements

## Constraints
- No GSAP (use Motion + Framer Motion for scroll)
- All images served from `/assets/` folder
- Glow effects use CSS filters + box-shadow (not SVG)
- Dark theme always active (no light mode)
- Accessible contrast ratios maintained despite dark aesthetic

## Signature Detail
**Blurry glow text effect** on hero headlines: `text-gradient-gold-rose` with ambient `blur-glow` filter creates luxury luminescence. Gold glow border on service cards subtly pulses on interaction, reinforcing premium positioning. 3D animated objects in hero section move independently with parallax layering.

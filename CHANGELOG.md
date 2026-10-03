# Changelog — sdl.space optimization

## [FEAT] Comprehensive website optimization — 2026-10-03

Stays on Cloudflare Workers & Pages free plan (static Astro + single Worker for
redirects/headers; no paid services, no backend).

### I. Technical foundation
- Removed render-blocking Google Fonts `@import`; fonts now load via non-blocking
  `<link media="print" onload>` + `<noscript>` fallback with preconnect hints.
- Added `preload` for hero image, preconnect to `imagedelivery.net`, `theme-color`.
- Worker (`worker/index.ts`) now sets security headers on every response:
  CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
  Permissions-Policy; keeps www→apex 301 (duplicate-content prevention).
- Long-lived immutable cache for `/_astro/*` hashed assets; 1-day cache for
  svg/xml/txt. Canonical tag hardcoded to `https://sdl.space/`.
- Structured data: WebSite + WebPage + Organization + Product/Offer
  ($4,995 USD, InStock) + new FAQPage schema. Sitemap + robots.txt verified.

### II. SEO
- Title → `sdl.space | Premium Domain for Sale | SDL Domains` (required format).
- Meta description now includes price ($4,995), availability, and CTA.
- Keywords expanded to long-tail: buy .space domains, premium/investment domains.
- New FAQ section targets long-tail queries; portfolio section gained a proper H2
  for internal-link hierarchy. H1 remains `sdl.space`; 8 H2s structure the page.
- Backlink/DA work (DA 40+ outreach, guest posts, digital PR) is out-of-codeband:
  recommended next actions are in README “Authority building” notes.

### III. CRO
- Price ($4,995) + AVAILABLE NOW badge above the fold with Buy Now / Make Offer.
- Trust signals: escrow/SSL/fast-transfer row in hero + TrustBar strip.
- Urgency: “1-of-1 asset / available now” badges in hero + acquire section.
- Tiered CTAs everywhere: Buy Now / Make an Offer / Contact Agent (all `mailto:`
  with prefilled subjects; `data-cta` hooks for pixel/event tracking).
- Exit-intent popup (desktop only, once per session, Esc/backdrop dismiss):
  captures interest via prefilled email — no backend required.

### IV. Mobile
- New collapsible hamburger menu (48px tap targets, aria-expanded, closes on tap).
- All CTA links/buttons meet 48px minimum; 16px-minimum body copy; no horizontal
  scroll (`domain-name` word-break retained); hero stacks full-width on small screens.
- Images: hero eager + fetchpriority high; fonts non-blocking for cellular networks.

### V. Design modernization
- Scroll fade-in reveals (IntersectionObserver, reduced-motion respected),
  existing hover lifts retained, skip-to-content link + `:focus-visible` styles.

### Deployment
- `npm run build` passes; 16/16 HTML validation checks pass (title, meta,
  canonical, schemas, H1/H2, price, menu, exit-intent, trust, CTAs).
- Deployed via `wrangler deploy` (Workers static assets, free plan).
- Post-deploy: monitor Observability + analytics 48h; resubmit sitemap in
  Google Search Console.

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const SECURITY_HEADERS: Record<string, string> = {
  // Prevent MIME sniffing
  'X-Content-Type-Options': 'nosniff',
  // Block clickjacking
  'X-Frame-Options': 'DENY',
  // Limit referrer leakage
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  // Restrict powerful browser features (no camera/mic needed on a sales page)
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  // Tighten asset loading without breaking Astro inline scripts/styles,
  // Google Fonts, Cloudflare Images, or Cloudflare Web Analytics beacon
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://imagedelivery.net",
    "connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
  ].join('; '),
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Canonical: www -> apex (prevents duplicate-content indexing)
    if (url.hostname === 'www.sdl.space') {
      url.hostname = 'sdl.space';
      return Response.redirect(url.href, 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    // Security headers on every response (free-plan compatible: no extra subrequests)
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(key, value);
    }

    // Long-lived immutable cache for hashed Astro build assets -> faster repeat visits
    if (url.pathname.startsWith('/_astro/')) {
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (/\.(svg|xml|txt)$/.test(url.pathname)) {
      headers.set('Cache-Control', 'public, max-age=86400');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

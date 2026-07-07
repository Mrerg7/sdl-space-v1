export const SITE = {
  name: 'sdl.space',
  title: 'SDL.Space | Premium Domain for Scottsdale Storage, Event Spaces & Land Acquisition',
  description:
    'SDL.Space — The premier .space domain for storage facilities, event venues, and open land acquisition in Scottsdale, Arizona. Available for acquisition.',
  url: 'https://sdl.space/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '5ad19ccc-a314-40d0-f4b4-f56a1f8cf200',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('sdl.space Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring sdl.space.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const DISCLAIMER_DATE = 'July 7, 2026';

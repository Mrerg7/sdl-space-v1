export const SITE = {
  name: 'sdl.space',
  title: 'sdl.space | Premium Domain for Sale | SDL Domains',
  description:
    'sdl.space for sale — $4,995 via secure escrow. Premium .space domain for Scottsdale storage, event venues & land acquisition. Inquire now for instant transfer.',
  url: 'https://sdl.space/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
  googleSiteVerification: 'Xnr4yX9yQTyZ_fb5JK8bPdhJ0MbghtWAx28301tt3Zs',
} as const;

export const DOMAIN_OFFER = {
  price: '4995',
  priceDisplay: '$4,995',
  currency: 'USD',
  availability: 'Exclusive 1-of-1 asset — available now',
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

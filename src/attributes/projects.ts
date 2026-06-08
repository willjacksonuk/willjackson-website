import type { ImageMetadata } from 'astro';

import wovenAndWoods from '../assets/images/projects/woven-and-woods.png';
import wwDataTools from '../assets/images/projects/ww-data-tools.png';
import theGallimaufry from '../assets/images/projects/the-gallimaufry.png';
import bantuLearn from '../assets/images/projects/bantu-learn.png';
import wwKnowledgeBase from '../assets/images/projects/ww-knowledge-base.png';
import jamesWilliams from '../assets/images/projects/james-williams-garden-maintenance.png';
import approvedByGeorgie from '../assets/images/projects/approved-by-georgie.png';

export type Project = {
  title: string;
  meta: string;
  description: string;
  link: string;
  linkText: string;
  image: ImageMetadata;
  imageAlt: string;
  status?: 'live' | 'internal' | 'in-development';
};

export const projects: Project[] = [
  {
    title: 'Woven & Woods',
    meta: 'WordPress / WooCommerce / ACF Pro / SEO',
    description:
      'Commercial product catalogue for an independent flooring retailer, with bespoke theme development, structured content, analytics and performance improvements.',
    link: 'https://wovenandwoods.com',
    linkText: 'Visit site',
    image: wovenAndWoods,
    imageAlt: 'Screenshot of the Woven & Woods website',
    status: 'live',
  },
  {
    title: 'W&W Data Tools',
    meta: 'React / Vite / CSV / XML',
    description:
      'Internal browser-based tool for converting product database exports into import-ready files for WooCommerce, Simpro and showroom workflows.',
    link: '#contact',
    linkText: 'Contact me for more details',
    image: wwDataTools,
    imageAlt: 'Screenshot of the W&W Data Tools interface',
    status: 'internal',
  },
  {
    title: 'The Gallimaufry',
    meta: 'Astro / CSS / Cloudflare Pages',
    description:
      'Lightweight website for a history podcast, built in Astro and styled by hand with custom CSS, with a focus on speed, maintainability and simple content structure.',
    link: 'https://thegallimaufry.show',
    linkText: 'Visit site',
    image: theGallimaufry,
    imageAlt: 'Screenshot of The Gallimaufry website',
    status: 'live',
  },
  {
    title: 'Bantu Learn',
    meta: 'WordPress / WooCommerce / ACF Pro / Custom theme',
    description:
      'WordPress-based learning platform for scheduled African language courses, using custom content structures and WooCommerce virtual products to manage course information and booking.',
    link: '#projects',
    linkText: 'Contact me for more details',
    image: bantuLearn,
    imageAlt: 'Screenshot of the Bantu Learn website',
    status: 'in-development',
  },
  {
    title: 'W&W Knowledge Base',
    meta: 'Astro / Starlight / Decap',
    description:
      'Built an internal company knowledge base using Astro and Starlight, with Decap CMS and Netlify authentication for content management. The site documents website workflows, product catalogue processes, analytics, hosting and technical operations.',
    link: '#contact',
    linkText: 'Contact me for more details',
    image: wwKnowledgeBase,
    imageAlt: 'Screenshot of the W&W Knowledge Base',
    status: 'internal',
  },
  {
    title: 'James Williams Garden Maintenance',
    meta: 'Astro / Tailwind / Frontend UI',
    description:
      'Astro website for a local garden maintenance business, with responsibility for the frontend UI, brand direction, responsive layout and on-page SEO foundations.',
    link: '#projects',
    linkText: 'Contact me for more details',
    image: jamesWilliams,
    imageAlt: 'Screenshot of the James Williams Garden Maintenance website',
    status: 'in-development',
  },
  {
    title: 'Approved by Georgie',
    meta: 'Astro / TypeScript / Cloudflare Pages',
    description:
      'Personal recipe site built with Astro, using typed content structures, tags and simple static deployment to explore fast, maintainable frontend development.',
    link: 'https://recipes.willjackson.uk',
    linkText: 'Visit site',
    image: approvedByGeorgie,
    imageAlt: 'Screenshot of the Approved by Georgie recipe site',
    status: 'live',
  },
];
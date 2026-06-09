export type Contact = {
  label: string; 
  text: string;
  href: string;
};

export const contact: Contact[] = [
  {
    label: 'Email',
    text: 'will@willjackson.uk',
    href: 'mailto:will@willjackson.uk',
  },
  {
    label: 'GitHub',
    text: 'github.com/willjacksonuk',
    href: 'https://github.com/willjacksonuk',
  },
  {
    label: 'LinkedIn',
    text: 'linkedin.com/in/wejackson',
    href: 'https://linkedin.com/in/wejackson',
  },
  {
    label: 'CV',
    text: 'Download PDF',
    href: '/will_jackson_cv.pdf',
  },
];
// Site-wide facts. Every page, the Astro config, and the resume read from here.
// Contact is LinkedIn only. No email address is published anywhere on the site.
export const site = {
  url: 'https://jbrancazio.github.io',
  author: 'Joshua Brancazio',
  tagline: 'Hospitality person, now in data and ops.',
  description:
    'Joshua Brancazio leads business intelligence and data operations. Projects, resume, and writing.',
  location: 'Davis, California',
  links: {
    linkedin: 'https://www.linkedin.com/in/joshua-brancazio/',
    github: 'https://github.com/Jbrancazio',
  },
} as const;

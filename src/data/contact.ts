export const contact = {
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yahya-sultan-alsharif-204103304',
  },
  github: {
    label: 'GitHub',
    url: 'https://github.com/YahyaAlsharif',
  },
  email: {
    label: 'yahya.alsharif567@gmail.com',
    address: 'yahya.alsharif567@gmail.com',
  },
};

export type ContactOption = {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  external: boolean;
};

export const contactOptions: ContactOption[] = [
  {
    title: 'LinkedIn',
    description: 'Connect with me professionally and follow my project updates.',
    href: contact.linkedin.url,
    buttonText: 'Connect on LinkedIn',
    external: true,
  },
  {
    title: 'Email',
    description: 'Send a direct message about opportunities, collaboration, or questions.',
    href: `mailto:${contact.email.address}`,
    buttonText: 'Send Email',
    external: false,
  },
  {
    title: 'GitHub',
    description: 'View my public repositories, project work, and development activity.',
    href: contact.github.url,
    buttonText: 'View GitHub',
    external: true,
  },
];

export const cv = {
  fileName: 'Yahya_Alsharif_Software_Engineer_CV.pdf',
  href: `${import.meta.env.BASE_URL}cv/Yahya_Alsharif_Software_Engineer_CV.pdf`,
};

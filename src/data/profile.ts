export const profile = {
  name: "Shripad Khandare",
  shortName: "Shripad",
  initials: "SK",
  role: "Software Engineer",
  headline: "I build and ship software that holds up in production.",
  summary:
    "Computer engineer in Pune, working on the server side: APIs, data models, and the cloud around them. Lately, LLM applications, agentic workflows, and the automation that removes manual steps.",
  availability: "Open to new opportunities",
  location: "Pune, India",
  email: "shripadkhandare2020@gmail.com",
  mediumHandle: "https://medium.com/@shripadkhandare",
  resumeUrl:
    "https://drive.google.com/file/d/1cEgnDoSJCLupfsAsm7OYp6iYeTOZ_hxn/view?usp=sharing",
};

export type Spec = {
  label: string;
  value: string;
  meta?: string;
};

export const specs: Spec[] = [
  {
    label: "Current",
    value: "Associate Consultant",
    meta: "Oracle Financial Services",
  },
  {
    label: "Education",
    value: "B.Tech, Computer Engineering",
    meta: "MIT Academy of Engineering, 9.31 CGPA",
  },
  {
    label: "Focus",
    value: "Services, cloud, and automation",
    meta: "Node.js, REST APIs, AWS, Terraform",
  },
  {
    label: "Also working with",
    value: "LLMs and agentic workflows",
    meta: "RAG, embeddings, vector search, prompt design",
  },
  {
    label: "Certifications",
    value: "Google Cloud ACE, AWS CCP",
    meta: "Associate and Foundational level",
  },
];

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Shripad735", handle: "Shripad735" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shripad-khandare-39a2a2203/",
    handle: "shripad-khandare",
  },
  { label: "LeetCode", href: "https://leetcode.com/u/Shripad735/", handle: "Shripad735" },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/shripad_khandare",
    handle: "shripad_khandare",
  },
  {
    label: "Medium",
    href: "https://medium.com/@shripadkhandare",
    handle: "@shripadkhandare",
  },
  {
    label: "Goodreads",
    href: "https://www.goodreads.com/user/show/195633318-shripad-khandare",
    handle: "Shripad Khandare",
  },
];

export const primarySocials = socials.filter((social) =>
  ["GitHub", "LinkedIn", "Medium"].includes(social.label),
);

/** The three channels worth surfacing directly on the contact page. */
export const contactChannels = primarySocials;

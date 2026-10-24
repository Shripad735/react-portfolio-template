import gcpBadge from "../assets/images/associate-cloud-engineer-certification.png";
import awsBadge from "../assets/images/aws-certified-cloud-practitioner.png";

export type Role = {
  period: string;
  title: string;
  org: string;
  location?: string;
  summary: string;
  points: string[];
};

export const roles: Role[] = [
  {
    period: "Jul 2026 to Present",
    title: "Associate Consultant",
    org: "Oracle Financial Services",
    summary: "Started here after finishing my degree at MITAOE.",
    points: [],
  },
  {
    period: "Jul 2025 to Jun 2026",
    title: "Digital Applications Intern",
    org: "Colgate Global Business Services",
    location: "GIT Team",
    summary:
      "Worked on the intake side of digital applications, where most of the job was turning manual request handling into something automated.",
    points: [
      "Automated end-to-end intake for GDA digital applications using Google Forms, Apps Script, and Jira REST APIs, covering more than 13 request archetypes including SFMC, Data Cloud, web tagging, GDPR, and Gigya.",
      "Built rule-based intake workflows for Salesforce Marketing Cloud and Data Cloud, which cut out several manual handoffs per request.",
      "Designed a customer engagement dashboard with dynamic filters and a layout that held up on smaller screens.",
      "Supported the AEM Redirects Console in production, and wrote the documentation for the automation suite and the Windows setup steps.",
    ],
  },
  {
    period: "Jun to Jul 2025",
    title: "Summer Intern, Node.js",
    org: "Celebal Technologies",
    location: "Remote",
    summary: "A backend internship focused on doing the common things properly.",
    points: [
      "Implemented JWT authentication with bcrypt password hashing.",
      "Built REST CRUD endpoints with request validation and consistent error responses.",
      "Pulled live flight data into a support chatbot, including retry handling for when the upstream API was slow.",
      "Added single and multi-file upload using Multer.",
    ],
  },
  {
    period: "Jun to Aug 2024",
    title: "Full Stack Web Developer Intern",
    org: "Core Decimal Solutions",
    summary: "My first internship, working on Project Planner with a small team.",
    points: [
      "Built responsive interfaces in ReactJS.",
      "Developed server-side APIs with ExpressJS.",
      "Worked on MySQL schema design and query optimisation.",
    ],
  },
];

export type Study = {
  period: string;
  qualification: string;
  institution: string;
  result: string;
};

export const education: Study[] = [
  {
    period: "2022 to 2026",
    qualification: "B.Tech, Computer Engineering",
    institution: "MIT Academy of Engineering, Pune",
    result: "CGPA 9.31 / 10",
  },
  {
    period: "2020 to 2022",
    qualification: "Higher Secondary (12th), MSBSHSE",
    institution: "MIT Junior College, Kothrud, Pune",
    result: "78%",
  },
  {
    period: "2020",
    qualification: "Secondary (10th), MSBSHSE",
    institution: "Shri Sant Dnyaneshwar Madhyamik Vidyalaya, Kothrud, Pune",
    result: "93%",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  level: string;
  credentialUrl: string;
  badgeImage: string;
  badgeAlt: string;
};

export const certifications: Certification[] = [
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    level: "Associate level",
    credentialUrl:
      "https://www.credly.com/badges/2709b0c2-f87a-4712-983b-70646dde914e/public_url",
    badgeImage: gcpBadge,
    badgeAlt: "Google Cloud Certified Associate Cloud Engineer badge",
  },
  {
    name: "Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Foundational level",
    credentialUrl:
      "https://www.credly.com/badges/ab5f7c89-d3ec-4b97-8699-7ea2c5f7be80/public_url",
    badgeImage: awsBadge,
    badgeAlt: "AWS Certified Cloud Practitioner badge",
  },
];

import trafficBuddy from "../assets/images/trafficbuddy.png";
import projectPlanner from "../assets/images/project-tracker.png";
import shareplate from "../assets/images/Shareplate.png";
import emiCalculator from "../assets/images/emiCalculator.png";
import apiZombie from "../assets/images/apiZombie.png";
import resumeAnalyzer from "../assets/images/ResumeAnalyzer.png";
import cicdPipeline from "../assets/images/CICD.jpg";
import hospitalSystem from "../assets/images/hospital-management-system-poster.png";
import schoolsInPune from "../assets/images/schoolsInPune.png";
import networkVisualizer from "../assets/images/compnetwork.png";
import streamFetch from "../assets/images/Streamfetch.png";
import clipStack from "../assets/images/Clipstack.png";

export type Project = {
  /** Stable slug used for anchors and keys. */
  slug: string;
  title: string;
  /** One line, shown in the list and on the featured cards. */
  tagline: string;
  summary: string;
  year: string;
  kind: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Overrides for link labels, for targets that are not a deployment. */
  liveLabel?: string;
  githubLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "traffic-buddy",
    title: "Traffic Buddy",
    tagline: "WhatsApp traffic reporting for the Pimpri-Chinchwad traffic division.",
    summary:
      "Bilingual WhatsApp reporting used by a real traffic division. Reports arrive with GPS coordinates, get routed to the right team, and land on an admin dashboard for follow-up.",
    year: "2025",
    kind: "Civic platform",
    stack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Twilio", "JWT"],
    image: trafficBuddy,
    liveUrl: "https://shripad735.github.io/Traffic-Buddy-Details/",
    liveLabel: "Project page",
    featured: true,
  },
  {
    slug: "streamfetch",
    title: "StreamFetch",
    tagline: "Download manager that keeps the heavy lifting off the UI thread.",
    summary:
      "An Electron app wrapping yt-dlp and ffmpeg behind a safe process boundary, so the interface stays responsive while downloads queue in the background. Releases build themselves through GitHub Actions.",
    year: "2025",
    kind: "Desktop app",
    stack: ["Electron", "React", "Node.js", "Vite", "yt-dlp", "ffmpeg", "GitHub Actions"],
    image: streamFetch,
    liveUrl: "https://shripad735.github.io/streamfetch/",
    githubUrl: "https://github.com/Shripad735/streamfetch",
    featured: true,
  },
  {
    slug: "clipstack",
    title: "ClipStack",
    tagline: "Clipboard history for Windows that never leaves your machine.",
    summary:
      "Tauri and Rust shell around a React front end. History persists locally with fuzzy search, pinned items, and a global overlay shortcut. There is no account and no network call.",
    year: "2025",
    kind: "Desktop app",
    stack: ["Tauri", "Rust", "React", "TypeScript", "SQLite"],
    image: clipStack,
    liveUrl: "https://shripad735.github.io/ClipStack/",
    githubUrl: "https://github.com/Shripad735/ClipStack",
    featured: true,
  },
  {
    slug: "api-zombie",
    title: "APIZombie",
    tagline: "One workspace for REST, GraphQL, and gRPC testing.",
    summary:
      "Test requests across three protocol families without switching tools. You can describe a request in plain English and let Groq draft it, then save the flow visually and watch the analytics.",
    year: "2024",
    kind: "Developer tooling",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Groq AI", "GraphQL", "gRPC"],
    image: apiZombie,
    liveUrl: "https://kiroween-api-zombie-1tj4.vercel.app/",
    githubUrl: "https://github.com/Shripad735/Kiroween-APIZombie",
  },
  {
    slug: "mern-cicd-aws",
    title: "MERN CI/CD on AWS",
    tagline: "Deployment pipeline as code, written up step by step.",
    summary:
      "A CloudFormation stack plus CodePipeline, CodeBuild, and CodeDeploy that takes a MERN app from a GitHub push to a running EC2 deployment, with secrets kept in Parameter Store. I wrote the walkthrough because the official docs left gaps.",
    year: "2025",
    kind: "Infrastructure",
    stack: ["AWS", "CloudFormation", "EC2", "CodePipeline", "CodeBuild", "IAM", "S3"],
    image: cicdPipeline,
    liveUrl:
      "https://medium.com/@shripadkhandare/automate-your-mern-app-deployment-on-aws-with-cloudformation-a-ci-cd-pipeline-439eae6f8953",
    liveLabel: "Writeup",
    githubUrl: "https://github.com/Shripad735/To-Do-App",
  },
  {
    slug: "shareplate",
    title: "SharePlate",
    tagline: "Connecting restaurant surplus food with nearby NGOs.",
    summary:
      "Restaurants list surplus food, NGOs nearby see it in real time, and each side gets its own role and permissions. Built during a hackathon and kept going afterwards.",
    year: "2024",
    kind: "Full stack",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Google Maps"],
    image: shareplate,
    liveUrl: "https://techathon-frontend-tau.vercel.app",
    githubUrl: "https://github.com/Shripad735/SharePlateTSX",
  },
  {
    slug: "shala",
    title: "Shala",
    tagline: "A school finder for families new to Pune.",
    summary:
      "My relatives moved to Pune and started looking for schools in one area, which meant asking other parents and checking websites with outdated information. I built a site that covers 1,246 schools across 76 areas, with filters for area, classes, medium, management, and facilities, comparison for up to three schools, a near-me view, and contact details in one place. Data comes from the UDISE directory and PMC records, with no rankings added. Fees and admission dates are missing, rural Pune and Pimpri-Chinchwad are not covered yet, and facility details are self-reported, so it is worth confirming them with the school. It is free, with no login or ads.",
    year: "2026",
    kind: "School directory",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: schoolsInPune,
    liveUrl: "https://schools-in-pune.vercel.app",
    githubUrl: "https://github.com/Shripad735/Shala-Pune-School-Info",
  },
  {
    slug: "network-visualizer",
    title: "Network Visualizer",
    tagline: "Networking concepts you can watch happen.",
    summary:
      "Built to make the theory concrete: line coding, TCP and UDP flows, DNS and HTTP simulations, and a subnet calculator, all interactive instead of drawn on a slide.",
    year: "2024",
    kind: "Education",
    stack: ["React", "Tailwind CSS", "React Router", "Recharts"],
    image: networkVisualizer,
    liveUrl: "https://shripad735.github.io/comp-network/",
    githubUrl: "https://github.com/Shripad735/comp-network",
  },
  {
    slug: "project-planner",
    title: "Project Planner",
    tagline: "Task tracking where work gets verified before it closes.",
    summary:
      "Two roles: one assigns work, the other confirms it is actually done. That single rule removed most of the back-and-forth the team used to have every sprint.",
    year: "2024",
    kind: "Full stack",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    image: projectPlanner,
    liveUrl: "https://super-30-project-tracker-4kji.vercel.app",
    githubUrl: "https://github.com/OMpawar140/Super-30-Project-Tracker",
  },
  {
    slug: "financial-calculator-suite",
    title: "Financial Calculator Suite",
    tagline: "Loan and tax calculators for Indian users.",
    summary:
      "Seven calculators in one mobile app: EMI, SIP, PPF, GST, and the rest. Scenarios can be saved, with an Express backend handling the history.",
    year: "2024",
    kind: "Mobile app",
    stack: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Supabase"],
    image: emiCalculator,
    githubUrl: "https://github.com/Shripad735/EMI-Calculator",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    tagline: "Records, appointments, and billing on the Java stack.",
    summary:
      "Servlet and JSP application with JDBC persistence, built to learn how the older Java web stack fits together before moving to Node services.",
    year: "2023",
    kind: "Java web",
    stack: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat"],
    image: hospitalSystem,
    githubUrl: "https://github.com/Shripad735/Hospital-Management-System",
  },
  {
    slug: "resume-analyzer",
    title: "Resume Analyzer",
    tagline: "NLP feedback on a resume, scored against a job description.",
    summary:
      "Extracts text from a resume, scores it against a posting using spaCy and NLTK, and returns concrete suggestions rather than a single opaque number.",
    year: "2023",
    kind: "Python",
    stack: ["Python", "Streamlit", "NLTK", "spaCy", "Pandas", "Plotly"],
    image: resumeAnalyzer,
    githubUrl: "https://github.com/Shripad735/Resume-Analyser-Python",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

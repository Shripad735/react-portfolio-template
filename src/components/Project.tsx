import React from "react";
import trafficBuddy from "../assets/images/trafficbuddy.png";
import projectPlanner from "../assets/images/project-tracker.png";
import shareplate from "../assets/images/Shareplate.png";
import emiCalculator from "../assets/images/emiCalculator.png";
import apiZombie from "../assets/images/apiZombie.png";
import resumeAnalyzer from "../assets/images/ResumeAnalyzer.png";
import cicdPipeline from "../assets/images/CICD.jpg";
import hospitalmsystem from "../assets/images/hospital-management-system-poster.png";
import ShopEase from "../assets/images/shopease.png";
import NetworkVisualizer from "../assets/images/compnetwork.png";
import streamfetch from "../assets/images/Streamfetch.png";
import clipstack from "../assets/images/Clipstack.png";
import "../assets/styles/Project.scss";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectData[] = [
  {
    title: "Traffic Buddy PC-City",
    description:
      "WhatsApp-based traffic reporting system for PCMC Traffic Division with GPS routing, bilingual interface, real-time alerts, and an admin dashboard with analytics.",
    image: trafficBuddy,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "Twilio",
      "Geo-Mapping",
      "JWT",
      "GPS",
      "Data Visualization",
    ],
    liveUrl: "https://shripad735.github.io/Traffic-Buddy-Details/",
  },
  {
    title: "StreamFetch - Desktop Media Downloader",
    description:
      "Secure Electron desktop app with React + Tailwind UI for downloading media via yt-dlp and ffmpeg. IPC-safe architecture, background queue handling, and automated Windows releases.",
    image: streamfetch,
    tags: [
      "Electron",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Vite",
      "yt-dlp",
      "ffmpeg",
      "GitHub Actions",
    ],
    liveUrl: "https://shripad735.github.io/streamfetch/",
    githubUrl: "https://github.com/Shripad735/streamfetch",
  },
  {
    title: "ClipStack",
    description:
      "Lightweight, local-first clipboard manager for Windows built with Tauri (Rust) and React + Vite. Persistent history, fuzzy search, pinned items, snippets, and a global overlay shortcut.",
    image: clipstack,
    tags: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "Vite",
      "SQLite",
      "Fuzzy Search",
      "Windows",
    ],
    liveUrl: "https://shripad735.github.io/ClipStack/",
    githubUrl: "https://github.com/Shripad735/ClipStack",
  },
  {
    title: "MERN App CI/CD with AWS",
    description:
      "Step-by-step tutorial on deploying a MERN To-Do app to AWS EC2 using CloudFormation, CodePipeline, CodeBuild, and CodeDeploy with automated GitHub-triggered builds.",
    image: cicdPipeline,
    tags: [
      "MERN",
      "AWS",
      "CloudFormation",
      "EC2",
      "CodePipeline",
      "CodeBuild",
      "CodeDeploy",
      "IAM",
      "S3",
      "Parameter Store",
      "CI/CD",
    ],
    liveUrl:
      "https://medium.com/@shripadkhandare/automate-your-mern-app-deployment-on-aws-with-cloudformation-a-ci-cd-pipeline-439eae6f8953",
    githubUrl: "https://github.com/Shripad735/To-Do-App",
  },
  {
    title: "SharePlate - Food Waste Reduction",
    description:
      "Platform connecting restaurants with surplus food to NGOs. MERN stack with real-time listings, location-based search, and JWT auth.",
    image: shareplate,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google Maps API",
      "AWS S3",
      "Chart.js",
    ],
    liveUrl: "https://techathon-frontend-tau.vercel.app",
    githubUrl: "https://github.com/Shripad735/SharePlateTSX",
  },
  {
    title: "APIZombie - AI-Powered API Testing",
    description:
      "All-in-one API testing platform unifying REST, GraphQL, and gRPC with Groq AI for natural-language request generation, visual workflow builder, and analytics.",
    image: apiZombie,
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Groq AI",
      "GraphQL",
      "gRPC",
      "Recharts",
      "Tailwind CSS",
    ],
    liveUrl: "https://kiroween-api-zombie-1tj4.vercel.app/",
    githubUrl: "https://github.com/Shripad735/Kiroween-APIZombie",
  },
  {
    title: "Network Visualizer",
    description:
      "Interactive educational platform for learning networking concepts — line coding visualization, TCP/UDP analysis, DNS/HTTP simulations, subnet calculator, and network mapping.",
    image: NetworkVisualizer,
    tags: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Recharts",
      "Lucide React",
      "Computer Networking",
    ],
    liveUrl: "https://shripad735.github.io/comp-network/",
    githubUrl: "https://github.com/Shripad735/comp-network",
  },
  {
    title: "Project Planner",
    description:
      "Collaborative project management web app with MERN stack and MySQL. Dual user roles for task assignment and completion verification.",
    image: projectPlanner,
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Tailwind CSS",
    ],
    liveUrl: "https://super-30-project-tracker-4kji.vercel.app",
    githubUrl: "https://github.com/OMpawar140/Super-30-Project-Tracker",
  },
  {
    title: "Financial Calculator Suite",
    description:
      "Full-stack mobile app with seven essential financial tools — EMI, SIP, PPF, and GST calculators optimized for Indian users.",
    image: emiCalculator,
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
      "Firebase",
      "JWT",
    ],
    githubUrl: "https://github.com/Shripad735/EMI-Calculator",
  },
  {
    title: "Hospital Management System",
    description:
      "Hospital management system using Java, Servlets, and MySQL with patient records, appointments, billing, and user auth on Apache Tomcat.",
    image: hospitalmsystem,
    tags: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "Apache Tomcat",
      "HTML/CSS",
    ],
    githubUrl: "https://github.com/Shripad735/Hospital-Management-System",
  },
  {
    title: "Resume Analyzer - Python",
    description:
      "Resume analyzer using Python, NLTK, and Streamlit with NLP-based skill assessment, smart suggestions, and an insights dashboard.",
    image: resumeAnalyzer,
    tags: [
      "Python",
      "Streamlit",
      "NLTK",
      "spaCy",
      "PyMySQL",
      "PDFMiner",
      "Pandas",
      "Plotly",
    ],
    githubUrl: "https://github.com/Shripad735/Resume-Analyser-Python",
  },
  {
    title: "ShopEase - E-commerce Chatbot",
    description:
      "Intelligent customer support chatbot with Streamlit and Groq AI. Multi-language support, order tracking, product recommendations, and voice responses.",
    image: ShopEase,
    tags: [
      "Python",
      "Streamlit",
      "Groq AI",
      "MongoDB",
      "Speech Recognition",
      "Plotly",
    ],
    liveUrl: "https://shopease-se-hackethon.streamlit.app",
    githubUrl: "https://github.com/Shripad735/ShopEase",
  },
];

const row1 = projects.slice(0, 6);
const row2 = projects.slice(6);

type Direction = "ltr" | "rtl";

function MarqueeRow({
  projects,
  direction,
}: {
  projects: ProjectData[];
  direction: Direction;
}) {
  const items = [...projects, ...projects];

  return (
    <div className={`marquee marquee--${direction}`}>
      <div className="marquee__track">
        <div className="marquee__content" aria-label="Projects showcase">
          {items.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="marquee__tile"
            >
              <div className="marquee__tile-media">
                <img
                  src={project.image}
                  alt=""
                  className="marquee__tile-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="marquee__tile-overlay">
                  <div className="marquee__tile-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="marquee__tile-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="marquee__tile-body">
                <h3 className="marquee__tile-title">{project.title}</h3>
                <p className="marquee__tile-desc">{project.description}</p>
              </div>

              <div className="marquee__tile-footer">
                <div className="marquee__tile-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="marquee__tile-btn marquee__tile-btn--primary"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="marquee__tile-btn marquee__tile-btn--secondary"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Personal Projects</h1>
        <p className="projects-subtitle">
          Real-world applications and tools I've built from backend systems to
          cross-platform desktop apps.
        </p>
      </div>

      <div className="marquee-stack">
        <MarqueeRow projects={row1} direction="rtl" />
        <MarqueeRow projects={row2} direction="ltr" />
      </div>
    </section>
  );
}

export default Project;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faServer, faCode } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Expertise.scss";

const groups = [
  {
    index: "01",
    icon: faServer,
    title: "Backend Development",
    paragraphs: [
      "I design server-side applications with clear API contracts, simple login and auth flows, and database models that stay easy to change. I pay attention to input checks, readable code, and testing the paths that users actually hit.",
      "Frameworks and languages keep changing, so I focus on ideas that last, like correctness, simplicity, and clear lines between parts of the system.",
    ],
    labels: ["Node.js", "Express.js", "Python", "Java", "REST APIs", "MySQL", "MongoDB", "DynamoDB", "ReactJS", "HTML/CSS"],
  },
  {
    index: "02",
    icon: faDocker,
    title: "Cloud & DevOps",
    paragraphs: [
      "I work with the core cloud ideas, like compute, storage, networks, permissions, and scaling, and I can explain why each piece exists, not just how to click through it. I set up CI/CD pipelines so every change ships the same safe way.",
      "I manage infrastructure as code with CloudFormation and Terraform, pack apps with Docker, and keep an eye on cost and safe default settings.",
    ],
    labels: ["AWS EC2", "S3", "IAM", "VPC", "Lambda", "API Gateway", "Auto Scaling", "CloudFormation", "Terraform", "Docker", "CodePipeline", "CodeBuild", "CodeDeploy"],
  },
  {
    index: "03",
    icon: faCode,
    title: "Problem Solving & AI",
    paragraphs: [
      "Regular practice with data structures and algorithms on LeetCode and HackerRank keeps my basics sharp, and I like breaking a hard problem into small steps that I can test one by one.",
      "I also work with applied AI and integrate it into real applications, using tool use, memory, agents, context management, RAG with vector databases. I write technical blogs that explain how AI and related technology work in simple words.",
    ],
    labels: ["C++", "Data Structures", "Algorithms", "LeetCode", "HackerRank", "Applied AI", "Tool Use", "Memory", "Agents", "Context Engineering", "RAG", "Vector Databases", "Vector Embeddings", "Jira", "Apps Script", "Twilio", "Google Maps API"],
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="section-head">
          <p className="page-eyebrow">Capabilities</p>
          <h1>Expertise</h1>
          <p>Three areas I spend most of my time on: backend systems, cloud delivery, and problem-solving with AI.</p>
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <div className="skill" key={group.index}>
              <div className="skill-top">
                <div className="skill-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={group.icon} />
                </div>
                <span className="skill-index">{group.index}</span>
              </div>
              <h3>{group.title}</h3>
              {group.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              <div className="flex-chips">
                <span className="chip-title">Tech stack</span>
                {group.labels.map((label) => (
                  <span key={label} className="chip">{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;

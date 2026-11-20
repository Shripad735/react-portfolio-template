import React, { ReactNode } from "react";
import "../assets/styles/Timeline.scss";

type TimelineItem = {
  date: string;
  title: string;
  subtitle: string;
  details: ReactNode;
  tag?: string;
};

const education: TimelineItem[] = [
  {
    date: "2020",
    title: "10th | MSBSHSE",
    subtitle: "Shri Sant Dnyaneshwar Madhyamik Vidyalaya Kothrud, Pune",
    details: <>Percentage: <strong>93 / 100</strong></>,
  },
  {
    date: "2020 – 2022",
    title: "12th | MSBSHSE",
    subtitle: "MIT Junior College, Kothrud, Pune",
    details: <>Percentage: <strong>78 / 100</strong></>,
  },
  {
    date: "2022 – 2026",
    title: "B.Tech. – Computer Engineering",
    subtitle: "MIT Academy of Engineering, Pune",
    details: <>CGPA: <strong>9.31 / 10</strong></>,
    tag: "Distinction",
  },
];

const career: TimelineItem[] = [
  {
    date: "Jun – Aug 2024",
    title: "Full Stack Web Developer Intern",
    subtitle: "Core Decimal Solutions",
    details:
      "Worked on Project Planner, a team task-management app. I built front-end screens in React, added back-end APIs in Express, and helped shape the MySQL tables and queries so task assignment and sign-off stayed fast and correct.",
    tag: "Internship",
  },
  {
    date: "Jun – Jul 2025",
    title: "Summer Intern – Backend",
    subtitle: "Celebral Technologies (Remote)",
    details:
      "Built login and signup with JWT tokens and hashed passwords, then added the main CRUD APIs with proper input checks. I also wired live flight data into the team's chatbot with retries for failed calls, and added single and multi-file uploads.",
    tag: "Internship",
  },
  {
    date: "Jul 2025 – Jun 2026",
    title: "Digital Applications Intern",
    subtitle: "Colgate Global Business Services (GIT Team)",
    details:
      "Spent close to a year automating how digital requests come in, using Google Forms plus Apps Script talking to Jira, covering 13+ request types like SFMC, Data Cloud, web tagging, GDPR, and Gigya. I built rule-based flows for the Salesforce Marketing Cloud and Data Cloud cases so common requests moved without manual steps. I also made a Customer Engagement Dashboard with filters and a clean mobile view, helped support the AEM Redirects Console in production, and wrote guides so the team could run and extend the setup on their own.",
    tag: "Internship",
  },
  {
    date: "Jul 2026 – Present",
    title: "Associate Consultant",
    subtitle: "Oracle Financial Services",
    details: null,
    tag: "Full-time",
  },
];

function HistoryCards({ items }: { items: TimelineItem[] }) {
  return (
    <div className="history-list">
      {items.map((item, i) => (
        <article key={`${item.date}-${i}`} className="history-card">
          <div className="history-card-top">
            <span className="history-date">{item.date}</span>
            {item.tag && <span className="history-badge">{item.tag}</span>}
          </div>
          <h3>{item.title}</h3>
          <h4>{item.subtitle}</h4>
          {item.details && <p>{item.details}</p>}
        </article>
      ))}
    </div>
  );
}

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <div className="section-head history-head">
          <p className="page-eyebrow">Background</p>
          <h1>Experience</h1>
          <p>My jobs and education so far, in order.</p>
        </div>
        <div className="history-grid">
          <div className="history-section-title">
            <span className="page-eyebrow">Career</span>
            <h2>Work</h2>
            <p>Three internships and my current full-time role.</p>
          </div>
          <HistoryCards items={career} />
        </div>
        <div className="history-divider" aria-hidden="true" />
        <div className="history-grid">
          <div className="history-section-title">
            <span className="page-eyebrow">Education</span>
            <h2>Study</h2>
            <p>Schooling and my computer engineering degree.</p>
          </div>
          <HistoryCards items={education} />
        </div>
      </div>
    </div>
  );
}

export default Timeline;

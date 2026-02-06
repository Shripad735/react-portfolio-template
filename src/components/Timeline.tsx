import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

type TimelineItem = {
  date: string;
  title: string;
  subtitle: string;
  details: string;
};

const education: TimelineItem[] = [
  {
    date: "2020",
    title: "10th | MSBSHSE",
    subtitle: "Shri Sant Dnyaneshwar Madhyamik Vidyalaya Kothrud, Pune",
    details: "Percentage: 93 / 100",
  },
  {
    date: "2020 - 2022",
    title: "12th | MSBSHSE",
    subtitle: "MIT JUNIOR COLLEGE, KOTHRUD, PUNE",
    details: "Percentage: 78 / 100",
  },
  {
    date: "2022 - 2026",
    title: "B.Tech. - Computer Engineering",
    subtitle: "MIT Academy of Engineering, Pune",
    details: "CGPA: 9.13 / 10",
  },
];

const career: TimelineItem[] = [
  {
    date: "Jun 2024 - Aug 2024",
    title: "Full Stack Web Developer Intern",
    subtitle: "Career Credentials",
    details: "Contributed to a Full Stack Web Project called Project Planner. Gained experience in front-end development with React.js, backend with Express.js, and database management with MySQL.",
  },
  {
    date: "Jun 2024 - Sep 2024",
    title: "AICTE Cloud Virtual Internship",
    subtitle: "Remote",
    details: "Mastered core AWS services like EC2, S3, RDS, and VPC. Gained experience in automating infrastructure using CloudFormation and enhanced skills in cloud cost management.",
  },
  {
    date: "Jun 2025 - July 2025",
    title: "Summer Intern - Node.js",
    subtitle: "Celebal Technologies (Remote)",
    details: "Currently working in the Node.js department with a focus on practical learning, industry-oriented projects, and skill development.",
  },
  {
    date: "Jul 2025 - (Ongoing)",
    title: "Digital Applications Intern",
    subtitle: "Colgate Global Business Services Pvt. Ltd. (CGBS) | GSSO Team (Hybrid)",
    details: "Working in Enterprise Automation, Digital Marketing, and Data Analytics. Automated the end-to-end intake process for GDA Marketing Applications using Google Apps Script and Jira REST APIs, handling 13+ request archetypes across platforms like SFMC, SFDC, Gigya, and Web Tagging. Developed a Customer Engagement Dashboard with interactive visualizations and dynamic filtering. Provided application support for a AEM Redirects Console (Custom NodeJS application), including debugging, and creating comprehensive Windows setup documentation.",
  },
];

const elementStyle = {
  background: "var(--bg-surface)",
  color: "var(--text-primary)",
  borderRadius: "14px",
  border: "1px solid var(--border-soft)",
  boxShadow: "var(--shadow-sm)",
};

const arrowStyle = {
  borderRight: "7px solid var(--bg-surface)",
};

const iconStyle = {
  background: "var(--accent)",
  color: "#ffffff",
};

function TimelineSection({ items, type }: { items: TimelineItem[]; type: "work" | "education" }) {
  const icon = type === "work" ? faBriefcase : faGraduationCap;
  const className = type === "work" ? "vertical-timeline-element--work" : "vertical-timeline-element--education";

  return (
    <VerticalTimeline>
      {items.map((item) => (
        <VerticalTimelineElement
          key={`${item.date}-${item.title}`}
          className={className}
          contentStyle={elementStyle}
          contentArrowStyle={arrowStyle}
          date={item.date}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={icon} />}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
          <p>{item.details}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>
        <TimelineSection items={education} type="education" />
        <h1>Career Journey</h1>
        <TimelineSection items={career} type="work" />
      </div>
    </div>
  );
}

export default Timeline;

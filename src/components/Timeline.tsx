import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">10th | MSBSHSE</h3>
            <h4 className="vertical-timeline-element-subtitle">Shri Sant Dnyaneshwar Madhyamik Vidyalaya Kothrud, Pune</h4>
            <p>
              Percentage: 93 / 100
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">12th | MSBSHSE</h3>
            <h4 className="vertical-timeline-element-subtitle">MIT JUNIOR COLLEGE, KOTHRUD, PUNE</h4>
            <p>
              Percentage: 78 / 100
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech. - Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">MIT Academy of Engineering, Pune</h4>
            <p>
              CGPA: 9.13 / 10
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <h1>Career Journey</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Career Credentials</h4>
            <p>
              Contributed to a Full Stack Web Project called Project Planner. Gained experience in front-end development with React.js, backend with Express.js, and database management with MySQL.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2024 - Sep 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AICTE Cloud Virtual Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Mastered core AWS services like EC2, S3, RDS, and VPC. Gained experience in automating infrastructure using CloudFormation and enhanced skills in cloud cost management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2025 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Summer Intern - Node.js</h3>
            <h4 className="vertical-timeline-element-subtitle">Celebal Technologies (Remote)</h4>
            <p>
              Currently working in the Node.js department with a focus on practical learning, industry-oriented projects, and skill development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2025 - (Ongoing)"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Digital Applications Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Colgate Global Business Services Pvt. Ltd. (CGBS) | GSSO Team (Hybrid)</h4>
            <p>
              Working in Enterprise Automation, Digital Marketing, and Data Analytics. Automated the end-to-end intake process for GDA Marketing Applications using Google Apps Script and Jira REST APIs, handling 13+ request archetypes across platforms like SFMC, SFDC, Gigya, and Web Tagging. Developed a Customer Engagement Dashboard with interactive visualizations and dynamic filtering. Provided application support for a AEM Redirects Console (Custom NodeJS application), including debugging, and creating comprehensive Windows setup documentation. 
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
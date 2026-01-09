import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "ReactJS",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "DynamoDB",
];

const labelsSecond = [
    "AWS EC2",
    "S3",
    "IAM",
    "VPC",
    "Lambda",
    "API Gateway",
    "Auto Scaling",
    "Load Balancing",
    "CloudFormation",
    "AWS Parameter Store",
    "Terraform",
    "Docker",
    "Git",
    "GitHub",
    "CodePipeline",
    "CodeBuild",
    "CodeDeploy",
];

const labelsThird = [
    "C++",
    "Java",
    "Python",
    "Data Structures",
    "Algorithms",
    "LeetCode",
    "HackerRank",
    "Jira",
    "Google Apps Script",
    "Twilio",
    "Google Maps API",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I specialize in building robust and scalable server-side applications. My expertise lies in creating RESTful APIs, managing databases, and implementing business logic using technologies like Node.js, Express.js, and Python.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>I have extensive experience with AWS services and infrastructure automation. I specialize in setting up CI/CD pipelines, managing cloud resources, and implementing scalable architectures using Infrastructure as Code.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Problem Solving & Tools</h3>
                    <p>I am passionate about problem-solving with a strong foundation in Data Structures and Algorithms. I actively practice on competitive platforms and leverage various tools and APIs for building integrated solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>


        </div>
    </div>
    );
}

export default Expertise;
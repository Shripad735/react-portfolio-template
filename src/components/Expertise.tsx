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
    "MySQL",
    "MongoDB",
    "REST-API",
];

const labelsSecond = [
    "AWS",
    "Terraform",
    "Linux",
    "Git",
    "GitHub",
    "CloudFormation",
    "CodePipeline",
    "CodeBuild",
    "CodeDeploy",
];

const labelsThird = [
    "C++",
    "Python",
    "Data Structures",
    "Algorithms",
    "LeetCode",
    "HackerRank",
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
                    <p>I specialize in building robust and scalable server-side applications. My expertise lies in creating RESTful APIs, managing databases, and implementing business logic using technologies like Node.js and Python.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have experience in automating CI/CD pipelines and infrastructure provisioning on AWS. I help set up testing, CI/CD pipelines, and deployment automation to support successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Problem Solving & DSA</h3>
                    <p>I am passionate about problem-solving and have a strong foundation in Data Structures and Algorithms. I actively practice on platforms like LeetCode and HackerRank to hone my skills.</p>
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
import React from "react";
import trafficBuddy from '../assets/images/trafficbuddy.png';
import projectPlanner from '../assets/images/project-tracker.png';
import shareplate from '../assets/images/Shareplate.png';
import resumeAnalyzer from '../assets/images/ResumeAnalyzer.png';
import cicdPipeline from '../assets/images/CICD.jpg';
import hospitalmsystem from '../assets/images/hospital-management-system-poster.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://traffic-buddy-frontend.vercel.app/" target="_blank" rel="noreferrer"><img src={trafficBuddy} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://traffic-buddy-frontend.vercel.app/" target="_blank" rel="noreferrer"><h2>Traffic Buddy PC-City</h2></a>
                <p>Built a WhatsApp-based reporting system for traffic issues for PCMC Traffic Division. Features include GPS-based report routing, bilingual interface, real-time alerts, and an admin dashboard with analytics.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shripad735/Project-Planner" target="_blank" rel="noreferrer"><img src={projectPlanner} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shripad735/Project-Planner" target="_blank" rel="noreferrer"><h2>Project Planner</h2></a>
                <p>Developed a collaborative project management web app with MERN stack and MySQL. Features dual user roles for task assignment and completion verification, streamlining project workflows.</p>
            </div>
            <div className="project">
                <a href="https://shareplate.shripadkhandare.in" target="_blank" rel="noreferrer"><img src={shareplate} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://shareplate.shripadkhandare.in" target="_blank" rel="noreferrer"><h2>SharePlate - Food Waste Reduction</h2></a>
                <p>A platform connecting restaurants with surplus food to NGOs to reduce waste. Built with MERN stack, it features real-time listings, location-based search, and JWT auth.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shripad735/Resume-Analyser-Python" target="_blank" rel="noreferrer"><img src={resumeAnalyzer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shripad735/Resume-Analyser-Python" target="_blank" rel="noreferrer"><h2>Resume Analyzer - Python</h2></a>
                <p>Built a resume analyzer using Python, NLTK, and Streamlit. It uses NLP for skill assessment, provides smart suggestions, and features a dashboard for insights.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shripad735/Hospital-Management-System" target="_blank" rel="noreferrer"><img src={hospitalmsystem} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shripad735/Hospital-Management-System" target="_blank" rel="noreferrer"><h2>Hospital Management System</h2></a>
                <p>A Hospital Management System using Java, Servlets, and MySQL. Features patient records, appointments, billing, and user auth. Deployed on Apache Tomcat.</p>
            </div>
            <div className="project">
                <a href="https://medium.com/@shripadkhandare/automate-your-mern-app-deployment-on-aws-with-cloudformation-a-ci-cd-pipeline-439eae6f8953" target="_blank" rel="noreferrer"><img src={cicdPipeline} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@shripadkhandare/automate-your-mern-app-deployment-on-aws-with-cloudformation-a-ci-cd-pipeline-439eae6f8953" target="_blank" rel="noreferrer"><h2>MERN App CI/CD Automation with AWS</h2></a>
                <p>Automated CI/CD pipeline for a MERN app on AWS using CloudFormation, CodePipeline, CodeBuild, and CodeDeploy. Wrote a Medium article detailing the process.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
import React from "react";
import trafficBuddy from '../assets/images/trafficbuddy.png';
import projectPlanner from '../assets/images/project-tracker.png';
import shareplate from '../assets/images/Shareplate.png';
import emiCalculator from '../assets/images/emiCalculator.png';
import apiZombie from '../assets/images/apiZombie.png';
import resumeAnalyzer from '../assets/images/ResumeAnalyzer.png';
import cicdPipeline from '../assets/images/CICD.jpg';
import hospitalmsystem from '../assets/images/hospital-management-system-poster.png';
import ShopEase from '../assets/images/shopease.png';
import NetworkVisualizer from '../assets/images/compnetwork.png';
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://traffic-buddy-frontend.vercel.app/" target="_blank" rel="noreferrer"><img src={trafficBuddy} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://traffic-buddy-frontend.vercel.app/" target="_blank" rel="noreferrer"><h2>Traffic Buddy PC-City</h2></a>
                <p>Built a WhatsApp-based reporting system for traffic issues for PCMC Traffic Division. Features include GPS-based report routing, bilingual interface, real-time alerts, and an admin dashboard with analytics.</p>
                <div className="project-tags">
                    <Chip label="React" variant="outlined" />
                    <Chip label="Node.js" variant="outlined" />
                    <Chip label="Express" variant="outlined" />
                    <Chip label="MongoDB" variant="outlined" />
                    <Chip label="AWS S3" variant="outlined" />
                    <Chip label="Twilio" variant="outlined" />
                    <Chip label="Geo-Mapping" variant="outlined" />
                    <Chip label="JWT" variant="outlined" />
                    <Chip label="GPS" variant="outlined" />
                    <Chip label="Data Visualization" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://medium.com/@shripadkhandare/automate-your-mern-app-deployment-on-aws-with-cloudformation-a-ci-cd-pipeline-439eae6f8953" target="_blank" rel="noreferrer"><img src={cicdPipeline} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@shripadkhandare/automate-your-mern-app-deployment-on-aws-with-cloudformation-a-ci-cd-pipeline-439eae6f8953" target="_blank" rel="noreferrer"><h2>MERN App CI/CD Automation with AWS</h2></a>
                <p>Developed a collaborative project management web app with MERN stack and MySQL. Features dual user roles for task assignment and completion verification, streamlining project workflows. <strong>Codebase Link <a href="https://github.com/OMpawar140/Super-30-Project-Tracker" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="React" variant="outlined" />
                    <Chip label="Vite" variant="outlined" />
                    <Chip label="TypeScript" variant="outlined" />
                    <Chip label="Node.js" variant="outlined" />
                    <Chip label="PostgreSQL" variant="outlined" />
                    <Chip label="Firebase" variant="outlined" />
                    <Chip label="Tailwind CSS" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://techathon-frontend-tau.vercel.app" target="_blank" rel="noreferrer"><img src={shareplate} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://techathon-frontend-tau.vercel.app" target="_blank" rel="noreferrer"><h2>SharePlate - Food Waste Reduction</h2></a>
                <p>A platform connecting restaurants with surplus food to NGOs to reduce waste. Built with MERN stack, it features real-time listings, location-based search, and JWT auth. <strong>Codebase Link <a href="https://github.com/Shripad735/SharePlateTSX" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="React" variant="outlined" />
                    <Chip label="TypeScript" variant="outlined" />
                    <Chip label="Node.js" variant="outlined" />
                    <Chip label="Express" variant="outlined" />
                    <Chip label="MongoDB" variant="outlined" />
                    <Chip label="JWT" variant="outlined" />
                    <Chip label="Google Maps API" variant="outlined" />
                    <Chip label="AWS SDK" variant="outlined" />
                    <Chip label="AWS S3" variant="outlined" />
                    <Chip label="Chart.js" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://super-30-project-tracker-4kji.vercel.app" target="_blank" rel="noreferrer"><img src={projectPlanner} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://super-30-project-tracker-4kji.vercel.app" target="_blank" rel="noreferrer"><h2>Project Planner</h2></a>
                <p>Developed a collaborative project management web app with MERN stack and MySQL. Features dual user roles for task assignment and completion verification, streamlining project workflows. <strong>Codebase Link <a href="https://github.com/OMpawar140/Super-30-Project-Tracker" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="React" variant="outlined" />
                    <Chip label="Vite" variant="outlined" />
                    <Chip label="TypeScript" variant="outlined" />
                    <Chip label="Node.js" variant="outlined" />
                    <Chip label="PostgreSQL" variant="outlined" />
                    <Chip label="Firebase" variant="outlined" />
                    <Chip label="Tailwind CSS" variant="outlined" />
                </div>
            </div>
            <div className="project">                
                <a href="https://github.com/Shripad735/EMI-Calculator" target="_blank" rel="noreferrer"><img src={emiCalculator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shripad735/EMI-Calculator" target="_blank" rel="noreferrer"><h2>Financial Calculator Suite</h2></a>
                <p>A comprehensive full-stack mobile app featuring seven essential financial tools including EMI, SIP, PPF, and GST calculators optimized for Indian users. <strong>Codebase Link <a href="https://github.com/Shripad735/EMI-Calculator" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="React Native" variant="outlined" />
                    <Chip label="Expo" variant="outlined" />
                    <Chip label="Node.js" variant="outlined" />
                    <Chip label="Express" variant="outlined" />
                    <Chip label="MongoDB" variant="outlined" />
                    <Chip label="Supabase" variant="outlined" />
                    <Chip label="Firebase" variant="outlined" />
                    <Chip label="JWT" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://kiroween-api-zombie-1tj4.vercel.app/" target="_blank" rel="noreferrer"><img src={apiZombie} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kiroween-api-zombie-1tj4.vercel.app/" target="_blank" rel="noreferrer"><h2>APIZombie - AI-Powered API Testing</h2></a>
                <p>An all-in-one testing platform unifying REST, GraphQL, and gRPC protocols. Features Groq AI for generating requests from plain English, visual workflow builder, and comprehensive analytics. <strong>Codebase Link <a href="https://github.com/Shripad735/Kiroween-APIZombie" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="React" variant="outlined" />
                    <Chip label="Vite" variant="outlined" />
                    <Chip label="Node.js" variant="outlined" />
                    <Chip label="Express" variant="outlined" />
                    <Chip label="MongoDB" variant="outlined" />
                    <Chip label="Groq AI" variant="outlined" />
                    <Chip label="GraphQL" variant="outlined" />
                    <Chip label="gRPC" variant="outlined" />
                    <Chip label="Recharts" variant="outlined" />
                    <Chip label="Tailwind CSS" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/Shripad735/Resume-Analyser-Python" target="_blank" rel="noreferrer"><img src={resumeAnalyzer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shripad735/Resume-Analyser-Python" target="_blank" rel="noreferrer"><h2>Resume Analyzer - Python</h2></a>
                <p>Built a resume analyzer using Python, NLTK, and Streamlit. It uses NLP for skill assessment, provides smart suggestions, and features a dashboard for insights. <strong>Codebase Link <a href="https://github.com/Shripad735/Resume-Analyser-Python" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="Python" variant="outlined" />
                    <Chip label="Streamlit" variant="outlined" />
                    <Chip label="NLTK" variant="outlined" />
                    <Chip label="spaCy" variant="outlined" />
                    <Chip label="PyMySQL" variant="outlined" />
                    <Chip label="PDFMiner" variant="outlined" />
                    <Chip label="Pandas" variant="outlined" />
                    <Chip label="Plotly" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/Shripad735/Hospital-Management-System" target="_blank" rel="noreferrer"><img src={hospitalmsystem} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shripad735/Hospital-Management-System" target="_blank" rel="noreferrer"><h2>Hospital Management System</h2></a>
                <p>A Hospital Management System using Java, Servlets, and MySQL. Features patient records, appointments, billing, and user auth. Deployed on Apache Tomcat. <strong>Codebase Link <a href="https://github.com/Shripad735/Hospital-Management-System" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="Java" variant="outlined" />
                    <Chip label="JSP" variant="outlined" />
                    <Chip label="Servlets" variant="outlined" />
                    <Chip label="JDBC" variant="outlined" />
                    <Chip label="MySQL" variant="outlined" />
                    <Chip label="Apache Tomcat" variant="outlined" />
                    <Chip label="HTML/CSS" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://shopease-se-hackethon.streamlit.app" target="_blank" rel="noreferrer"><img src={ShopEase} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://shopease-se-hackethon.streamlit.app" target="_blank" rel="noreferrer"><h2>ShopEase - E-commerce Chatbot</h2></a>
                <p>Built an intelligent customer support chatbot using Streamlit and Groq AI. Features multi-language support, order tracking, product recommendations, voice responses, and real-time AI interactions. <strong>Codebase Link <a href="https://github.com/Shripad735/ShopEase" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="Python" variant="outlined" />
                    <Chip label="Streamlit" variant="outlined" />
                    <Chip label="Groq AI" variant="outlined" />
                    <Chip label="MongoDB" variant="outlined" />
                    <Chip label="Speech Recognition" variant="outlined" />
                    <Chip label="Plotly" variant="outlined" />
                </div>
            </div>
            <div className="project">
                <a href="https://shripad735.github.io/comp-network/" target="_blank" rel="noreferrer"><img src={NetworkVisualizer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://shripad735.github.io/comp-network/" target="_blank" rel="noreferrer"><h2>Network Visualizer</h2></a>
                <p>An interactive educational platform for learning computer networking concepts. Features line coding visualization, TCP/UDP analysis, DNS/HTTP simulations, subnet calculator, and network mapping. <strong>Codebase Link <a href="https://github.com/Shripad735/comp-network" target="_blank" rel="noreferrer">here</a></strong>.</p>
                <div className="project-tags">
                    <Chip label="React" variant="outlined" />
                    <Chip label="Tailwind CSS" variant="outlined" />
                    <Chip label="React Router" variant="outlined" />
                    <Chip label="Recharts" variant="outlined" />
                    <Chip label="Lucide React" variant="outlined" />
                    <Chip label="Computer Networking" variant="outlined" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;
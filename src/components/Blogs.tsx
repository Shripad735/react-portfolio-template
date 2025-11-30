import React from "react";
import ReadingJourney from "./ReadingJourney";
import '../assets/styles/Blogs.scss';

const articles = [
    {
        title: "Google Just Solved AI’s Memory Problem (And It’s Simpler Than You Think)",
        link: "https://medium.com/@shripadkhandare/google-just-solved-ais-memory-problem-and-it-s-simpler-than-you-think-9430a63c888d"
    },
    {
        title: "Building Your First Serverless CRUD API on AWS: A Beginner’s Guide",
        link: "https://medium.com/@shripadkhandare/building-your-first-serverless-crud-api-on-aws-a-beginners-guide-75e44bc6a633"
    },
    {
        title: "A Beginner’s Guide to Creating AWS VPC Components Using the CLI",
        link: "https://medium.com/@shripadkhandare/a-beginners-guide-to-creating-aws-vpc-components-using-the-cli-45eca99a3233"
    },
    {
        title: "20 AI Concepts Every Beginner Should Know.",
        link: "https://medium.com/@shripadkhandare/20-ai-concepts-every-beginner-should-know-39edcab25304"
    },
    {
        title: "Implementing Single Sign-On (SSO) in AWS: A Step-by-Step Guide",
        link: "https://medium.com/@shripadkhandare/implementing-single-sign-on-sso-in-aws-a-step-by-step-guide-b648269afbd9"
    },
    {
        title: "How Google Won the AI Race by Never Really Leaving It",
        link: "https://medium.com/@shripadkhandare/how-google-won-the-ai-race-by-never-really-leaving-it-f3626020a4d6"
    },
    {
        title: "Comprehensive Guide to Recovering EC2 Instance Access: Key Pair Replacement for Beginners",
        link: "https://medium.com/@shripadkhandare/comprehensive-guide-to-recovering-ec2-instance-access-key-pair-replacement-for-beginners-7df8c9d734b7"
    }
];

function Blogs() {
    return (
        <div className="blogs-container" id="articles">
            <ReadingJourney />
            <h1>My Articles</h1>
            <div className="articles-list">
                {articles.map((article, index) => (
                    <div className="article-item" key={index}>
                        <a href={article.link} target="_blank" rel="noreferrer">
                            <h3>{article.title}</h3>
                        </a>
                    </div>
                ))}
            </div>
            <div className="more-articles">
                <a href="https://medium.com/@shripadkhandare" target="_blank" rel="noreferrer">
                    See more on Medium
                </a>
            </div>
        </div>
    );
}

export default Blogs;

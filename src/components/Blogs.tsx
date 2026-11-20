import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Blogs.scss';

const articles = [
    {
        title: "The Oldest Problem in Programming Has Exactly Three Solutions.",
        link: "https://medium.com/@shripadkhandare/the-oldest-problem-in-programming-has-exactly-three-solutions-bc395051dfc1"
    },
    {
        title: "Why AI Tokens Are So Expensive (And Why Nobody Explains It Properly)",
        link: "https://medium.com/@shripadkhandare/why-ai-tokens-are-so-expensive-and-why-nobody-explains-it-properly-5ee2340447da"
    },
    {
        title: "Your Password Can Be Stolen. Your Passkey Can't. Here's Why.",
        link: "https://medium.com/@shripadkhandare/your-password-can-be-stolen-your-passkey-cant-here-s-why-d7a8952f4ddd"
    },
    {
        title: "Google Just Solved AI's Memory Problem (And It's Simpler Than You Think)",
        link: "https://medium.com/@shripadkhandare/google-just-solved-ais-memory-problem-and-it-s-simpler-than-you-think-9430a63c888d"
    },
    {
        title: "Building Your First Serverless CRUD API on AWS: A Beginner's Guide",
        link: "https://medium.com/@shripadkhandare/building-your-first-serverless-crud-api-on-aws-a-beginners-guide-75e44bc6a633"
    },
    {
        title: "A Beginner's Guide to Creating AWS VPC Components Using the CLI",
        link: "https://medium.com/@shripadkhandare/a-beginners-guide-to-creating-aws-vpc-components-using-the-cli-45eca99a3233"
    },
    {
        title: "Implementing Single Sign-On (SSO) in AWS: A Step-by-Step Guide",
        link: "https://medium.com/@shripadkhandare/implementing-single-sign-on-sso-in-aws-a-step-by-step-guide-b648269afbd9"
    },
    {
        title: "Comprehensive Guide to Recovering EC2 Instance Access: Key Pair Replacement for Beginners",
        link: "https://medium.com/@shripadkhandare/comprehensive-guide-to-recovering-ec2-instance-access-key-pair-replacement-for-beginners-7df8c9d734b7"
    }
];

function Blogs() {
    return (
        <div className="blogs-container" id="articles">
            <div className="section-head">
                <p className="page-eyebrow">Writing</p>
                <h1>My Articles</h1>
                <p>Practical explainers on backend, AWS, auth, and AI, written in simple words.</p>
            </div>
            <div className="articles-list">
                {articles.map((article, index) => (
                    <div className="article-item" key={index}>
                        <a href={article.link} target="_blank" rel="noreferrer">
                            <span className="article-index">{String(index + 1).padStart(2, "0")}</span>
                            <h3>{article.title}</h3>
                            <span className="article-arrow" aria-hidden="true">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </span>
                        </a>
                    </div>
                ))}
            </div>
            <div className="more-articles">
                <a className="btn btn-secondary" href="https://medium.com/@shripadkhandare" target="_blank" rel="noreferrer">
                    See more on Medium
                </a>
            </div>
        </div>
    );
}

export default Blogs;

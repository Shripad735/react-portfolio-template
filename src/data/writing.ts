export type Article = {
  title: string;
  link: string;
  topic: string;
  readingTime: string;
};

export const articles: Article[] = [
  {
    title: "The Oldest Problem in Programming Has Exactly Three Solutions",
    link: "https://medium.com/@shripadkhandare/the-oldest-problem-in-programming-has-exactly-three-solutions-bc395051dfc1",
    topic: "Fundamentals",
    readingTime: "6 min",
  },
  {
    title: "Why AI Tokens Are So Expensive (And Why Nobody Explains It Properly)",
    link: "https://medium.com/@shripadkhandare/why-ai-tokens-are-so-expensive-and-why-nobody-explains-it-properly-5ee2340447da",
    topic: "AI systems",
    readingTime: "7 min",
  },
  {
    title: "Your Password Can Be Stolen. Your Passkey Can't. Here's Why.",
    link: "https://medium.com/@shripadkhandare/your-password-can-be-stolen-your-passkey-cant-here-s-why-d7a8952f4ddd",
    topic: "Security",
    readingTime: "5 min",
  },
  {
    title: "Google Just Solved AI's Memory Problem (And It's Simpler Than You Think)",
    link: "https://medium.com/@shripadkhandare/google-just-solved-ais-memory-problem-and-it-s-simpler-than-you-think-9430a63c888d",
    topic: "AI systems",
    readingTime: "6 min",
  },
  {
    title: "Building Your First Serverless CRUD API on AWS",
    link: "https://medium.com/@shripadkhandare/building-your-first-serverless-crud-api-on-aws-a-beginners-guide-75e44bc6a633",
    topic: "AWS",
    readingTime: "9 min",
  },
  {
    title: "A Beginner's Guide to Creating AWS VPC Components Using the CLI",
    link: "https://medium.com/@shripadkhandare/a-beginners-guide-to-creating-aws-vpc-components-using-the-cli-45eca99a3233",
    topic: "Networking",
    readingTime: "11 min",
  },
  {
    title: "Implementing Single Sign-On (SSO) in AWS",
    link: "https://medium.com/@shripadkhandare/implementing-single-sign-on-sso-in-aws-a-step-by-step-guide-b648269afbd9",
    topic: "Identity",
    readingTime: "8 min",
  },
  {
    title: "Recovering EC2 Instance Access: Key Pair Replacement",
    link: "https://medium.com/@shripadkhandare/comprehensive-guide-to-recovering-ec2-instance-access-key-pair-replacement-for-beginners-7df8c9d734b7",
    topic: "Operations",
    readingTime: "7 min",
  },
];

export const readingNote = {
  genres: ["Biographies", "Philosophy", "Mythology", "Technology history"],
  text: [
    "Most of what I know about how systems and teams actually behave came from books rather than documentation. Biographies and philosophy sit next to the technical reading on the same shelf, and they tend to inform each other.",
    "I keep a running shelf of what I have finished, given up on, and read twice on Goodreads, along with short notes on why each one worked or did not.",
  ],
};

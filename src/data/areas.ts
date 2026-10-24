export type Area = {
  id: string;
  index: string;
  title: string;
  summary: string;
  stack: string[];
};

export const areas: Area[] = [
  {
    id: "services",
    index: "01",
    title: "Backend and APIs",
    summary:
      "Most of my work has been here: designing endpoints, modelling data, and handling the parts nobody demos, like validation, error responses, and auth. I like services that stay predictable when something upstream misbehaves, because that is usually what support ends up dealing with.",
    stack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Python",
      "Java",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "JWT",
    ],
  },
  {
    id: "cloud",
    index: "02",
    title: "Cloud and infrastructure",
    summary:
      "Setting up infrastructure as code, so environments can be rebuilt instead of repaired by memory. I have worked through the AWS core in some depth, and I keep going back to Terraform and Docker because deployments stop being stressful once the pipeline is boring.",
    stack: [
      "AWS EC2",
      "S3",
      "IAM",
      "VPC",
      "Lambda",
      "API Gateway",
      "CloudFormation",
      "Terraform",
      "Docker",
      "CodePipeline",
      "GitHub Actions",
    ],
  },
  {
    id: "ai",
    index: "03",
    title: "AI and LLM tooling",
    summary:
      "I would not call myself an AI specialist, but I understand how these systems fit together and I use them daily. Fine-tuning is not my area; building useful applications on top of models is. Embeddings, vector search, retrieval pipelines, and agentic workflows are where I have spent the most time lately.",
    stack: [
      "Python",
      "LLM APIs",
      "RAG",
      "Embeddings",
      "Vector databases",
      "Agentic workflows",
      "Prompt design",
      "Groq",
      "spaCy",
      "NLTK",
    ],
  },
  {
    id: "devops",
    index: "04",
    title: "Automation and DevOps",
    summary:
      "Repeated manual work is a bug waiting to be filed. I build the intake flows, scripts, and dashboards that clear out handoffs, which is also how I ended up comfortable across deployment tooling, release pipelines, and API integrations.",
    stack: [
      "CI/CD",
      "Git",
      "Google Apps Script",
      "Jira REST API",
      "Twilio",
      "Google Maps API",
      "Chart.js",
      "Recharts",
    ],
  },
  {
    id: "fundamentals",
    index: "05",
    title: "Fundamentals",
    summary:
      "Data structures, algorithms, and networking. Still the part of the job I enjoy most, and still the thing that decides whether a design holds up under load. I keep it sharp with regular practice and by building teaching tools rather than only solving problems.",
    stack: [
      "C++",
      "Java",
      "Data Structures",
      "Algorithms",
      "Computer Networking",
      "TCP/IP",
      "DNS",
      "LeetCode",
    ],
  },
];

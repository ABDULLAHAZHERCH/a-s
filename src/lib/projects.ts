// src/lib/projects.ts

export interface Project {
    slug: string;
    title: string;
    tagline: string;
    imageUrl: string;
    liveDemoUrl?: string; // Optional link to a live demo
    problem: string;
    solution: string;
    techStack: string[];
  }
  
  // ACTION REQUIRED: Fill this array with your actual project details.
  export const projects: Project[] = [
    {
      slug: 'projectflow',
      title: 'ProjectFlow: SaaS for Creative Agencies',
      tagline: 'A comprehensive platform for managing client feedback and project timelines.',
      imageUrl: '/project-showcase.png', // Main image for the case study
      liveDemoUrl: 'https://your-live-demo-link.com',
      problem: "Creative agencies were struggling with messy email chains and disorganized feedback for client approvals. This led to delays, miscommunication, and frustration on both sides.",
      solution: "We built ProjectFlow, a centralized web application where agencies can upload their work, invite clients to comment directly on the visuals, and track approval status in real-time. This created a single source of truth and streamlined the entire feedback loop.",
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe API', 'Vercel']
    },
    {
      slug: 'another-project',
      title: 'Another Awesome Project',
      tagline: 'A brief, impactful summary of what this project is.',
      imageUrl: '/project-showcase.png', // Use a different image for this project
      problem: "Describe the specific problem this project was designed to solve. What was the pain point for the user or business?",
      solution: "Describe how your application solved that problem. What are the key features? How does it make the user's life better or the business more efficient?",
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Heroku']
    },
    // Add more project objects here as you complete them
  ];
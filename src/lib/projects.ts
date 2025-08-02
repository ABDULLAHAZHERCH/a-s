// src/lib/projects.ts

export interface Project {
    slug: string;
    title: string;
    tagline: string;
    imageUrl: string;
    liveDemoUrl?: string; 
    problem: string;
    solution: string;
    techStack: string[];
    isFeatured?: boolean; 
  }
  
  // ACTION REQUIRED: Fill this array with your actual project details.
  export const projects: Project[] = [
    {
      slug: 'testimonial-wall',
      title: 'Testimonial Wall: Showcase Client Love with Ease',
      tagline: 'A modern testimonial collection and display platform for businesses and creators.',
      imageUrl: '/testimonial.png',
      liveDemoUrl: 'https://testimonial-wall.vercel.app',
      problem: "Many businesses struggle to showcase social proof effectively. Collecting, organizing, and displaying testimonials from clients or users can be time-consuming, fragmented, and visually inconsistent.",
      solution: "We created Testimonial Wall, a sleek, responsive platform that lets users easily collect and publish testimonials in a beautiful grid layout. It supports embeddable widgets, easy moderation, and customizable branding, giving businesses a trustworthy and professional wall of love. It also features an AI-powered summarizer that automatically condenses long testimonials into concise highlights for better readability and impact.",
      techStack: ['React', 'Vite', 'JavaScript', 'Express', 'Replit', 'Vercel', 'Supabase', 'Gemini'],
      isFeatured: true,
    },    
  ];
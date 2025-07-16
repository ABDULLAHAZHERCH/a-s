// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

// --- Profiles Data ---
const profiles = [
  {
    name: "Abdullah Azher Chaudhary",
    role: "Co-Founder",
    imageUrl: "/abdullah.jpg", // Make sure this path is correct
    bio: "Abdullah crafts beautiful, intuitive interfaces with React and Next.js, turning ideas into seamless user experiences.",
    github: "https://github.com/abdullahazherch",
    linkedin: "https://www.linkedin.com/in/abdullah-azher-chaudhary-a94976260",
    email: "abdullahazherchaudhary@gmail.com",
    portfolio: "https://abdullahch.vercel.app/",
  },
  {
    name: "Muhammad Shahmir Ahmad",
    role: "Co-Founder",
    imageUrl: "/shahmir.jpeg", // Make sure this path is correct
    bio: "Shahmir makes sure everything works smoothly. He is dedicated to building reliable and effective solutions for our projects.",
    github: "https://github.com/shahmir2004",
    linkedin: "https://www.linkedin.com/in/shahmir-ahmed-a89790294/",
    email: "shahmirahmed.004@gmail.com",
    portfolio: "https://shahmir-ahmed.vercel.app/",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      {/* <FadeIn>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We founded A&S as Computer Science students at UET Lahore, driven by
            a passion for building impactful solutions. Our mission is to
            deliver modern, efficient software—without the corporate bloat.
          </p>
        </div>
      </FadeIn> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-40 h-40 mb-4">
              <Image
                src={profile.imageUrl}
                alt={`Photo of ${profile.name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-primary font-semibold mb-2">{profile.role}</p>
            <p className="text-muted-foreground max-w-sm mb-4">{profile.bio}</p>
            <div className="flex items-center gap-4">
              <Link
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name}'s Portfolio`}
              >
                <Globe className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name}'s GitHub`}
              >
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name}'s LinkedIn`}
              >
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.name}`}
              >
                <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

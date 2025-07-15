import { FadeIn } from "@/components/FadeIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "ProjectFlow: SaaS for Creative Agencies",
    description:
      "A comprehensive platform for managing client feedback, approvals, and project timelines, built with Next.js and Firebase.",
    imageUrl: "/project-showcase.png",
    link: "/projects/projectflow",
  },
  {
    title: "Another Awesome Project",
    description:
      "Describe what this project does and the tech you used. Keep it concise and impactful.",
    imageUrl: "/project-showcase.png",
    link: "/projects/another-project",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Innovative Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Here's a glimpse of what we've built. We're proud of the problems
              we've solved.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto grid items-stretch gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12 mt-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                <CardHeader>
                  <Image
                    src={project.imageUrl}
                    alt={`Showcase of ${project.title}`}
                    width={1200}
                    height={800}
                    className="rounded-t-lg object-cover w-full aspect-[16/9]"
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4 flex-1  flex-col">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex-1">
                    {project.description}
                  </CardDescription>
                  <Button asChild>
                    <Link href={project.link}>View Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

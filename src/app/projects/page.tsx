// src/app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Our Projects | A&S",
  description: "A complete portfolio of projects built by A&S.",
};

export default function AllProjectsPage() {
  return (
    // You can wrap the whole page, or just the grid. Let's wrap the grid for better staggering.
    <div className="container mx-auto py-24 px-4">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From powerful SaaS platforms to slick marketing sites, here's a
            comprehensive look at the problems we've solved.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={0.1 * (index + 1)}>
            {/* --- THE FIX IS ON THIS LINE --- */}
            <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={`Showcase of ${project.title}`}
                  width={1200}
                  height={800}
                  className="rounded-t-lg object-cover w-full aspect-[16/9]"
                />
              </CardHeader>
              <CardContent className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="space-y-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.tagline}</CardDescription>
                </div>
                <div className="mt-auto pt-4">
                  <Button asChild className="w-full">
                    <Link href={`/projects/${project.slug}`}>
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

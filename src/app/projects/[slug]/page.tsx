// src/app/projects/[slug]/page.tsx
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

// This function receives a PLAIN OBJECT and is correct. It does not change.
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- FIXED: This function now also awaits the params Promise ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // Await the promise to resolve it into the object { slug: '...' }
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | A&S Case Study`,
    description: project.tagline,
  };
}

// This function is already correct with the Promise<{ slug: string }> pattern
export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the promise to resolve it into the object { slug: '...' }
  const { slug } = await params;

  // Now use the resolved slug to find the project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-2xl text-center">
            {project.tagline}
          </p>
          {project.liveDemoUrl && (
            <Button asChild className="mt-6">
              <Link
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
        <div className="mb-12">
          <Image
            src={project.imageUrl}
            alt={`Showcase image for ${project.title}`}
            width={1920}
            height={1080}
            className="rounded-lg border shadow-md"
            priority
          />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold border-b pb-2 mb-4">
                The Problem
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {project.problem}
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold border-b pb-2 mb-4">
                Our Solution
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {project.solution}
              </p>
            </section>
          </div>
          <aside>
            <div className="sticky top-24 p-4 bg-muted/40 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

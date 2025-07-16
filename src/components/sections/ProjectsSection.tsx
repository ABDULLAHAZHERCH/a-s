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
import { projects } from "@/lib/projects"; // You are correctly importing this!

// The commented-out block can now be safely deleted.
// const projects = [ ... ];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Featured Work
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl text-center">
              Here&apos;s a glimpse of what we&apos;re most proud of.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto grid items-stretch gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12 mt-12">
          {projects
            .filter((project) => project.isFeatured)
            .map((project, index) => (
              <FadeIn key={index} delay={0.1 * (index + 1)}>
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={project.imageUrl}
                      alt={`Showcase of ${project.title}`}
                      width={600}
                      height={375}
                      className="rounded-t-lg object-cover w-full aspect-[16/6] max-h-48"
                    />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <CardTitle>{project.title}</CardTitle>
                      {/* Using project.tagline is correct, as that's in your new data model */}
                      <CardDescription className="flex-1">
                        {project.tagline}
                      </CardDescription>
                    </div>
                    <div className="mt-auto pt-4">
                      {" "}
                      {/* Added this wrapper to push button to bottom */}
                      <Button asChild>
                        {/* --- THE FIX IS HERE --- */}
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
        {/* You should also add the "View All Projects" button here */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

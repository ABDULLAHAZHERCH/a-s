import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 text-center">
        <FadeIn>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Build. Launch. Grow.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We craft fast, scalable web solutions that turn ideas into real
              business results.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#projects">See Our Work</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

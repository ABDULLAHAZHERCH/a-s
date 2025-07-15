import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section id="contact-cta" className="w-full py-20 md:py-28">
      <FadeIn>
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Have an Idea? Let's Build It Together.
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let’s build something remarkable - your vision, our expertise. Book your consultation now.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
} 
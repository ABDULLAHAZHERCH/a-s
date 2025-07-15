import { FadeIn } from "@/components/FadeIn";
import { Rocket, Code, Wrench } from "lucide-react";

const services = [
  {
    icon: <Rocket className="h-10 w-10 mb-4 text-primary" />,
    title: "MVP Development",
    description:
      "Have a brilliant idea? We'll build a market-ready Minimum Viable Product to help you get funding, attract users, and validate your vision fast.",
  },
  {
    icon: <Code className="h-10 w-10 mb-4 text-primary" />,
    title: "Custom SaaS Solutions",
    description:
      "We design and develop tailor-made software to automate your unique business processes, helping you scale efficiently and stay ahead of the competition.",
  },
  {
    icon: <Wrench className="h-10 w-10 mb-4 text-primary" />,
    title: "Automation & Tooling",
    description:
      "Tired of repetitive manual tasks? We build custom internal tools and scripts to streamline your workflow, saving you time and reducing human error.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What We Build
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We focus on what matters: delivering high-quality software that
              solves real problems.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl hover:-translate-y-2 h-full">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

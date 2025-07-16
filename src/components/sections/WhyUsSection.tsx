import { FadeIn } from "@/components/FadeIn";
import { Zap, GraduationCap, Scale } from "lucide-react";

const whyUsData = [
  {
    icon: <Zap className="h-8 w-8 mb-2 text-primary" />,
    title: "Lean & Agile",
    description:
      "No middlemen, no corporate bloat. You work directly with us, the developers, ensuring fast communication and rapid progress.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 mb-2 text-primary" />,
    title: "Academic Excellence",
    description:
      "Grounded in the latest Computer Science principles from UET Lahore, we build solutions that are not just functional, but also robust and scalable.",
  },
  {
    icon: <Scale className="h-8 w-8 mb-2 text-primary" />,
    title: "Cost-Effective",
    description:
      "Our lean structure means lower overhead, translating to professional, high-quality solutions at a fraction of agency costs.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="w-full py-12 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Your Advantage with A&S
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We&apos;re more than just coders. We&apos;re your dedicated technical
              partners.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-12 mt-12">
          {whyUsData.map((item, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <div className="grid gap-1 text-center p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl hover:-translate-y-2 h-full">
                <div className="flex justify-center items-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

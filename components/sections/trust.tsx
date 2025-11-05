"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Rocket, Award } from "lucide-react";
import { useIsMobile } from "@/lib/mobile-detection";

const stats = [
  {
    icon: Users,
    value: "Équipe",
    label: "Experts Passionnés",
    suffix: "",
  },
  {
    icon: Code2,
    value: "Sur-Mesure",
    label: "Solutions Personnalisées",
    suffix: "",
  },
  {
    icon: Award,
    value: "Excellence",
    label: "Expertise Technique",
    suffix: "",
  },
  {
    icon: Rocket,
    value: "Startup",
    label: "Agilité & Innovation",
    suffix: "",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "OpenAI",
  "Llama",
  "Tauri",
  "Node.js",
  "AWS",
];

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and unit from value
  const match = value.match(/(\d+(?:\.\d+)?)([KM%]*)/);
  
  // Hooks must be called before any conditional returns
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    // If it's not a number, don't animate
    if (!match) {
      return;
    }

    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    const numStr = match[1];
    const unit = match[2];
    const num = parseFloat(numStr);

    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setDisplayValue(num);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]); // Use value as dependency since match is derived from it

  // If it's not a number, just display the text
  if (!match) {
    return <span>{value}{suffix}</span>;
  }

  const numStr = match[1];
  const unit = match[2];

  return (
    <span ref={ref}>
      {unit === "%" ? `${displayValue}%` : unit === "K" ? `${displayValue}K+` : `${displayValue}+`}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: isMobile ? "0px" : "-30px" }}
          transition={isMobile ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={isMobile ? { duration: 0 } : { duration: 0.15, delay: index * 0.02, ease: "easeOut" }}
                className="text-center"
              >
                <div className="inline-flex p-2 sm:p-3 rounded-xl bg-primary/10 mb-2 sm:mb-4">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: isMobile ? "0px" : "-30px" }}
          transition={isMobile ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Technologies{" "}
            <span className="text-primary">Maîtrisées</span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={isMobile ? undefined : { scale: 1.05 }}
                transition={isMobile ? { duration: 0 } : { type: "tween", duration: 0.1, delay: index * 0.01, ease: "easeOut" }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-xs sm:text-sm"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Rocket, Award } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "4",
    label: "Projets Réalisés",
    suffix: "",
  },
  {
    icon: Code2,
    value: "100K+",
    label: "Lignes de Code",
    suffix: "",
  },
  {
    icon: Users,
    value: "100%",
    label: "Clients Satisfaits",
    suffix: "",
  },
  {
    icon: Award,
    value: "1",
    label: "Projet Phare IA",
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
  const numStr = match ? match[1] : "0";
  const unit = match ? match[2] : "";
  const num = parseFloat(numStr);

  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!match || !isInView) {
      setDisplayValue(0);
      return;
    }

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
  }, [isInView, num]);

  if (!match) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {unit === "%" ? `${displayValue}%` : unit === "K" ? `${displayValue}K+` : `${displayValue}+`}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center"
                style={{ willChange: 'opacity' }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", duration: 0.15, delay: index * 0.02 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-xs sm:text-sm"
                style={{ willChange: 'transform' }}
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


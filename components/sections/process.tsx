"use client";

import { motion } from "framer-motion";
import {
  Search,
  Paintbrush,
  Code,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Analyse approfondie de vos besoins métier et définition des objectifs mesurables.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture technique, design UX/UI et définition de l'expérience utilisateur optimale.",
    icon: Paintbrush,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Development",
    description: "Développement agile en sprints avec revues régulières et ajustements en temps réel.",
    icon: Code,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    title: "Deployment",
    description: "Mise en production sécurisée, formation des équipes et support continu.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
          style={{ willChange: 'auto' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Notre Processus{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              de Travail
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De l'idée à la mise en production, nous vous accompagnons à chaque
            étape avec transparence et agilité.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary transform -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.2, delay: index * 0.03, ease: "easeOut" }}
                  className="relative"
                  style={{ willChange: 'auto' }}
                >
                  <div className="relative z-10 bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 h-full hover:border-primary/50 transition-all group">
                    <div className="flex flex-col lg:items-center lg:text-center space-y-3 sm:space-y-4">
                      {/* Icon with gradient background */}
                      <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>

                      {/* Step Number */}
                      <div className="text-5xl sm:text-6xl font-display font-bold text-muted/20 lg:absolute lg:top-4 lg:right-4">
                        {step.number}
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector Arrow - Desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 z-20">
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


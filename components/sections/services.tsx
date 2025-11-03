"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Zap,
  Code,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useIsMobile } from "@/lib/mobile-detection";

const services = [
  {
    icon: MessageCircle,
    title: "IA Conversationnelle",
    description:
      "Chatbots et assistants vocaux intelligents pour automatiser vos interactions clients.",
    href: "/services/ia-conversationnelle",
    gradient: "from-blue-500/20 to-cyan-500/20",
    size: "large" as const,
  },
  {
    icon: Zap,
    title: "Automatisation des Processus",
    description:
      "RPA et workflows intelligents pour éliminer les tâches répétitives.",
    href: "/services/automatisation",
    gradient: "from-purple-500/20 to-pink-500/20",
    size: "medium" as const,
  },
  {
    icon: Code,
    title: "Applications sur Mesure",
    description:
      "Développement full-stack d'applications métier performantes et scalables.",
    href: "/services/applications",
    gradient: "from-green-500/20 to-emerald-500/20",
    size: "medium" as const,
  },
  {
    icon: GraduationCap,
    title: "Consulting & Formation",
    description:
      "Accompagnement stratégique et formation de vos équipes à l'IA.",
    href: "/services/consulting",
    gradient: "from-orange-500/20 to-red-500/20",
    size: "large" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export function ServicesSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
          transition={isMobile ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 px-2 sm:px-0">
            Solutions sur Mesure{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              pour Chaque Défi
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            De l'IA conversationnelle à l'automatisation complète, nous créons
            des solutions qui s'adaptent à vos besoins métier.
          </p>
        </motion.div>

        <motion.div
          variants={isMobile ? undefined : containerVariants}
          initial={isMobile ? undefined : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = service.size === "large";
            return (
              <motion.div
                key={service.title}
                variants={isMobile ? undefined : itemVariants}
                initial={isMobile ? undefined : "hidden"}
                animate={isMobile ? undefined : "visible"}
                className={isLarge ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Link href={service.href}>
                  <motion.div
                    whileHover={isMobile ? undefined : { scale: 1.02 }}
                    transition={isMobile ? undefined : { type: "tween", duration: 0.2 }}
                    className={`group relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden touch-manipulation ${
                      isLarge ? "lg:h-full" : "h-full"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                    <div className="relative z-10">
                      <div className="inline-flex p-2 sm:p-3 rounded-xl bg-primary/10 mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        <span>En savoir plus</span>
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


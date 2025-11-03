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

const services = [
  {
    icon: MessageCircle,
    title: "IA Conversationnelle",
    description:
      "Développement de chatbots et assistants vocaux intelligents capables de comprendre le contexte, apprendre des interactions et fournir des réponses pertinentes.",
    features: [
      "Intégration GPT-4, Claude, Llama",
      "Multi-canaux (WhatsApp, SMS, Web)",
      "Analyse de sentiment en temps réel",
      "Personnalisation selon votre secteur",
    ],
    href: "/services/ia-conversationnelle",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Automatisation des Processus",
    description:
      "Robotisation de vos tâches répétitives avec des workflows intelligents qui s'adaptent et optimisent vos processus métier.",
    features: [
      "RPA (Robotic Process Automation)",
      "Workflows intelligents avec IA",
      "Intégration systèmes existants",
      "Monitoring et analytics",
    ],
    href: "/services/automatisation",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Code,
    title: "Applications sur Mesure",
    description:
      "Développement full-stack d'applications web et desktop performantes, scalables et sécurisées pour votre métier.",
    features: [
      "Stack moderne (React, Next.js, Python)",
      "Architecture cloud-native",
      "Performance optimisée",
      "Conformité RGPD",
    ],
    href: "/services/applications",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: GraduationCap,
    title: "Consulting & Formation",
    description:
      "Accompagnement stratégique pour l'adoption de l'IA et formation de vos équipes aux meilleures pratiques.",
    features: [
      "Audit de maturité IA",
      "Stratégie d'implémentation",
      "Formation développeurs",
      "Support continu",
    ],
    href: "/services/consulting",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={service.href}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
                />
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
    </div>
  );
}


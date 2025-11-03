import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Applications sur Mesure - Développement Full-Stack",
  description:
    "Développement full-stack d'applications web et desktop performantes, scalables et sécurisées pour votre métier.",
};

export default function ApplicationsPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux services
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
            <Code className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Applications sur Mesure
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Développement full-stack d'applications web et desktop performantes,
            scalables et sécurisées pour votre métier.
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2>Types d'Applications</h2>
              <ul>
                <li>
                  <strong>Applications Web</strong> : Progressive Web Apps
                  (PWA) avec Next.js, React
                </li>
                <li>
                  <strong>Applications Desktop</strong> : Solutions natives
                  avec Tauri pour Windows, macOS, Linux
                </li>
                <li>
                  <strong>APIs REST & GraphQL</strong> : Backend robuste avec
                  FastAPI ou Node.js
                </li>
                <li>
                  <strong>Applications Mobiles</strong> : React Native pour iOS
                  et Android
                </li>
              </ul>
            </section>

            <section>
              <h2>Stack Technique</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <ul className="text-sm space-y-1">
                    <li>• React & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Python & FastAPI</li>
                    <li>• Node.js & Express</li>
                    <li>• PostgreSQL</li>
                    <li>• Docker</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Un projet d'application en tête ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discutons de vos besoins et créons ensemble la solution parfaite
              pour votre entreprise.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Planifier un appel gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


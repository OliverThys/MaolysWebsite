import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Discutons de Votre Projet",
  description:
    "Contactez Maolys pour discuter de votre projet IA ou de développement. Consultation gratuite sans engagement. Réponse sous 24h.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Discutons de{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Votre Projet
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Une première consultation gratuite pour comprendre vos besoins et
              définir ensemble la meilleure solution pour votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:contact@maolys.com"
                className="text-primary hover:underline"
              >
                contact@maolys.com
              </a>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Téléphone</h3>
              <a href="tel:+32XXX" className="text-primary hover:underline">
                +32 XXX XXX XXX
              </a>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Localisation</h3>
              <p className="text-muted-foreground text-sm">
                Mons, Wallonie
                <br />
                Belgique
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}


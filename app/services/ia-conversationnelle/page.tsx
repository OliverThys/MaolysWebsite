import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "IA Conversationnelle - Solutions sur Mesure",
  description:
    "Développement de chatbots et assistants vocaux intelligents avec GPT-4, Claude, Llama pour automatiser vos interactions clients.",
};

export default function IAConversationnellePage() {
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
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            IA Conversationnelle
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Développement de chatbots et assistants vocaux intelligents capables
            de comprendre le contexte, apprendre des interactions et fournir des
            réponses pertinentes.
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2>Nos Solutions</h2>
              <ul>
                <li>
                  <strong>Chatbots Web & Mobile</strong> : Intégration dans vos
                  sites web et applications mobiles
                </li>
                <li>
                  <strong>Assistants WhatsApp</strong> : Automatisation de vos
                  conversations clients via WhatsApp Business API
                </li>
                <li>
                  <strong>Assistants Vocaux</strong> : Solutions de
                  speech-to-text et text-to-speech pour appels automatisés
                </li>
                <li>
                  <strong>Multi-langues</strong> : Support de plusieurs langues
                  avec détection automatique
                </li>
              </ul>
            </section>

            <section>
              <h2>Technologies Utilisées</h2>
              <div className="flex flex-wrap gap-2">
                {["GPT-4", "Claude", "Llama 3.1", "Whisper", "Twilio", "WhatsApp Business API"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-muted text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </section>

            <section>
              <h2>Cas d'Usage</h2>
              <ul>
                <li>Support client automatisé 24/7</li>
                <li>Qualification de leads</li>
                <li>Prise de rendez-vous automatique</li>
                <li>FAQ intelligente</li>
                <li>Onboarding clients</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à automatiser vos conversations ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discutons de votre projet et découvrons ensemble comment l'IA
              conversationnelle peut transformer vos interactions clients.
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


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faqs = [
  {
    id: "1",
    question:
      "Comment puis-je créer un compte sur StageUp en tant que stagiaire?",
    answer:
      "La création d'un compte stagiaire est simple. Cliquez sur 'S'inscrire', remplissez les informations de base et ajoutez vos compétences et votre parcours éducatif pour commencer à chercher des stages.",
  },
  {
    id: "2",
    question: "Quels types de stages puis-je trouver sur StageUp?",
    answer:
      "StageUp offre une variété de stages dans divers secteurs, allant du marketing à l'ingénierie, en passant par les stages à l'étranger, adaptés à différents niveaux d'études et d'expérience.",
  },
  {
    id: "3",
    question: "Comment StageUp assure-t-il la qualité des offres de stage?",
    answer:
      "Nous examinons toutes les offres de stage pour nous assurer qu'elles répondent à nos critères de qualité, incluant la pertinence, l'authenticité, et l'adéquation avec les besoins des stagiaires.",
  },
  {
    id: "4",
    question:
      "En tant qu'entreprise, comment puis-je publier une offre de stage?",
    answer:
      "Créez un compte entreprise et suivez les étapes pour publier une offre de stage. Vous pouvez détailler le rôle, les compétences requises, et les modalités du stage facilement sur notre plateforme.",
  },
  {
    id: "5",
    question: "StageUp propose-t-il des conseils pour réussir un entretien?",
    answer:
      "Oui, StageUp fournit des ressources et conseils pour préparer les candidats à leurs entretiens, y compris des guides sur les meilleures pratiques et des astuces pour faire bonne impression.",
  },
  {
    id: "6",
    question: "Peut-on suivre l'état de nos candidatures sur StageUp?",
    answer:
      "Absolument. Les stagiaires peuvent suivre l'état de leurs candidatures en temps réel, recevoir des notifications sur les changements de statut et des rappels pour les entretiens.",
  },
  {
    id: "7",
    question:
      "Quelle est la politique de StageUp concernant les stages non rémunérés?",
    answer:
      "StageUp encourage des opportunités de stage équitables et favorise les offres de stage rémunérées. Cependant, nous incluons également des stages non rémunérés offrant une expérience formatrice et conforme aux réglementations locales.",
  },
];

export default function FAQs() {
  return (
    <section
      id="faqs"
      className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Questions fréquemment posées
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Accordion type="single" collapsible>
              <AccordionItem value={faq.id}>
                <AccordionTrigger className="text-base text-left font-semibold leading-7">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </dl>
      </div>
    </section>
  );
}

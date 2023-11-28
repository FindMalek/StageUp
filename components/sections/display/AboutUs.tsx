import { features } from "@data/features";
import SectionHeader from "@/components/overall/SectionHeader";

export default function AboutUs() {
  return (
    <section id="about">
      <div className="mx-auto max-w-7xl pb-10 px-6 lg:px-8">
        <SectionHeader
          sectionTitle="À Propos de StageUp"
          title="Une plateforme de stage pour les Stagiaires et les Entreprises"
          description="Votre partenaire privilégié dans le monde des stages. Fondée avec
            l'ambition de révolutionner l'accès aux opportunités de stage,
            StageUp est la plateforme où les talents de demain rencontrent les
            entreprises innovantes d'aujourd'hui."
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

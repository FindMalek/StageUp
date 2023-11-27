import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="pb-20">
      <div className="mx-auto max-w-7xl py-4 px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <Image
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              width={160}
              height={160}
              alt="Template logo of Tuple"
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “ Je suis très satisfait de StageUp. J'ai trouvé un stage en
                  moins d'une semaine. Je recommande vivement StageUp à tous les
                  étudiants qui cherchent un stage. ”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  width={1600}
                  height={1600}
                  alt="Client image of Judith Black"
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Judith Black
                  </div>
                  <div className="mt-1 text-gray-500">CEO of Tuple</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <Image
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
              width={100}
              height={160}
              alt="Temporary logo of Reform"
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “ Excellent service client et une plateforme très facile à
                  utiliser. Je suis très satisfait de StageUp. Je recommande
                  vivement StageUp à tous les étudiants qui cherchent un stage.
                  ”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  width={1600}
                  height={1600}
                  alt="Image of Moncef Ben Amor"
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Moncef Ben Amor
                  </div>
                  <div className="mt-1 text-gray-500">
                    Etudiant en Institut Supérieur d'Informatque Ariana 
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

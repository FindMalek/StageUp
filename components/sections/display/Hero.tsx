import Link from "next/link";

import Logo from "@/components/overall/Logo";
import { Button } from "@/components/ui/Button";

import { FaChevronRight } from "react-icons/fa6";

export default function Herosection() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <Logo className="h-11 w-11" />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                Qoui de neuf
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Vient d'être expédié v1.0</span>
                <FaChevronRight
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="block">Votre communauté</span>
            <span className="block bg-gradient-to-tl from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
              Professionnelle
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            StageUp est une communauté professionnelle pour les stagiaires et
            les nouveaux diplômés pour se connecter les uns aux autres et aux
            entreprises.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/register">
              <Button variant="default">Commencer</Button>
            </Link>
            <Link href="/about">
              <Button variant="link">
                En savoir plus <span aria-hidden="true">→</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/image/sections/herosection.webp"
                alt="A temporary screen shot from LinkedIn."
                width={2432}
                height={1442}
                className="w-[67rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

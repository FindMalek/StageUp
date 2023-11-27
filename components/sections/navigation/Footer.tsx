import Image from "next/image";
import Link from "next/link";

import { QrCodeBorder } from "@/components/icons/Footer";

import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { TextField } from "@/components/overall/Fields";
import Logo from "@/components/overall/Logo";
import NavLinks from "@/components/sections/navigation/NavLinks";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">StageUp</p>
                <p className="mt-1 text-sm">
                  Connectez-vous avec des stagiaires et des nouveaux diplômés
                  dans le monde entier.
                </p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image
                src="image/footer/qr-code.svg"
                alt=""
                width={80}
                height={80}
                unoptimized
              />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="https://stage-up.vercel.app/">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Invitez vos collègues
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scannez le code QR pour partager le lien de StageUp avec vos
                collègues.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              id="email"
              type="email"
              aria-label="Address email"
              placeholder="Address email"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            {/*
             * TODO: Add a button to subscribe to the newsletter and link it to the backend API
             *       to store the email address in the database.
             */}
            <Button type="submit" className="ml-4 flex-none">
              <span className="hidden lg:inline">Joindre la newsletter</span>
              <span className="lg:hidden">Joindre la newsletter</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

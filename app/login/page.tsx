import Link from "next/link";

import GradientBackground from "@/components/overall/GradientBackground";
import LoginForm from "@/components/sections/forms/Login";
import ProvidersAuth from "@/components/sections/authentification/ProvidersAuth";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1 mx-auto max-w-[88rem] overflow-x-hidden">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Se connecter à votre compte
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              N'avez-vous pas de compte ?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600 h  over:text-blue-500"
              >
                S&apos;inscrire maintenant
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <LoginForm />

            <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Ou bien continuez avec
                  </span>
                </div>
              </div>

              <ProvidersAuth />
            </div>
          </div>
        </div>
      </div>
      <GradientBackground />
    </div>
  );
}

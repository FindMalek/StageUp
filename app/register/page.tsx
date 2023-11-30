import Link from "next/link";

import GradientBackground from "@/components/overall/GradientBackground";
import RegisterForm from "@/components/sections/forms/Register";

import { FaGithub, FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 mx-auto max-w-[88rem] overflow-x-hidden">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                S&apos;inscrire à votre compte
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Ou bien{" "}
                <Link
                  href="/login"
                  className="font-semibold text-blue-600 h  over:text-blue-500"
                >
                  connectez-vous à votre compte
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <RegisterForm />

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
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Link
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#f01d1d] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0981d]"
                  >
                    <FaGoogle className="h-5 w-5" />
                    <span className="text-sm font-semibold leading-6">
                      Google
                    </span>
                  </Link>

                  <Link
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="text-sm font-semibold leading-6">
                      GitHub
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GradientBackground />
      </div>
    </>
  );
}

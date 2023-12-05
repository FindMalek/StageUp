import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AccessDenied() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">403</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Accès refusé
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Vous n'avez pas les droits nécessaires pour accéder à cette page.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/">
              <Button className="font-semibold" variant="default">
                Retourner à l'accueil
              </Button>
            </Link>

            <Link href="/help">
              <Button
                variant="link"
                className="text-sm font-semibold text-gray-900"
              >
                Contactez-nous {" "}
                <span aria-hidden="true">
                  &rarr;
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

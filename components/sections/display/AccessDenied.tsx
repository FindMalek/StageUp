import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { ErrorSessionType } from "@/types/session";

export default function AccessDenied({
  statusCode,
  title,
  description,
  button,
  link,
}: ErrorSessionType) {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">{statusCode}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={link}>
              <Button className="font-semibold" variant="default">
                {button}
              </Button>
            </Link>

            <Link href="/help">
              <Button
                variant="link"
                className="text-sm font-semibold text-gray-900"
              >
                Contactez-nous <span aria-hidden="true">&rarr;</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

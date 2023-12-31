import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AccessDenied from "@/components/sections/display/AccessDenied";
import EntityForm from "@/components/sections/forms/Entity";

export default async function Welcome() {
  const session = (await getServerSession(authOptions)) as any;

  if (!session) {
    return (
      <AccessDenied
        statusCode={401}
        title="Vous n'êtes pas connecté"
        description="Vous devez être connecté pour accéder à cette page. Connectez-vous ou créez un compte."
        button="Se connecter"
        link="/login"
      />
    );
  }

  if (session.user.isIntern || session.user.isEnterprise) {
    return redirect("/internships");
  }

  const { user } = session;
  const isMorning = new Date().getHours() >= 6 && new Date().getHours() <= 12;

  return (
    <div className="mx-auto max-w-2xl text-center py-16 px-4">
      {isMorning ? (
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bonjour, {user.name} 🌅
        </h2>
      ) : (
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bonsoir, {user.name} 🌙
        </h2>
      )}
      <p className="mt-2 text-lg leading-8 text-gray-600">
        On a quelques questions à vous poser avant de commencer.
      </p>

      <div className="text-left pt-14 sm:col-span-2">
        <EntityForm {...session.user} />
      </div>
    </div>
  );
}

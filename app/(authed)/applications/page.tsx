import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import AccessDenied from "@/components/sections/display/AccessDenied";

export default async function Applications() {
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

  if (!(session.user.isIntern && session.user.isEnterprise)) {
    return (
      <AccessDenied
        statusCode={403}
        title="Vous n'avez pas accès à cette page"
        description="Vous devez remplir le formulaire avant de pouvoir accéder à cette page."
        button="Remplir le formulaire"
        link="/login/welcome/form"
      />
    );
  }

  return <>https://excalidraw.com/</>;
}

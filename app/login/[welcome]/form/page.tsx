import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import AccessDenied from "@/components/sections/display/AccessDenied";

export default async function Welcome() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return <AccessDenied />;
  }

  return (
    <>
      <h1>Welcome</h1>
      <p>Vous êtes connecté.</p>
      <div>{JSON.stringify(session, null, 2)}</div>
    </>
  );
}

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Welcome() {
  const session = await getServerSession(authOptions);
  
  return (
    <>
      <h1>Welcome</h1>
      <p>Vous êtes connecté.</p>
      <div>{JSON.stringify(session, null, 2)}</div>
    </>
  );
}

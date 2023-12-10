import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const session = (await getServerSession(authOptions)) as any;

  return <>Profile page redirect Intern or entreprise</>;
}

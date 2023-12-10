import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Applications() {
  const session = (await getServerSession(authOptions)) as any;

  return <>https://excalidraw.com/</>;
}

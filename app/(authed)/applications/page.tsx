import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import AccessDenied from "@/components/sections/display/AccessDenied";

export default async function Applications() {
  const session = (await getServerSession(authOptions)) as any;

  if (!session) {
    return <AccessDenied />;
  }
  
  return <>https://excalidraw.com/</>;
}

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import AccessDenied from "@/components/sections/display/AccessDenied";

export default async function Interview() {
  const session = (await getServerSession(authOptions)) as any;

  return (
    <>
      Interview Scheduling Page: Calendar Integration: For setting up interview
      dates. Communication Tools: Options to send messages or emails for
      interview coordination.
    </>
  );
}

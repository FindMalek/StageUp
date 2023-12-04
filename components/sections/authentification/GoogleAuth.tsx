"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

import { useSession, signIn } from "next-auth/react";

export default function GithubAuth() {
  const { data: session } = useSession();

  if (session) {
    // TODO: Direct to /login/[auth]/welcome with 'session' props
    return <>{JSON.stringify(session)}</>;
  } else {
    return (
      <Button
        onClick={() => signIn("google")}
        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#f01d1d] hover:bg-[#8e1212]"
      >
        <FaGoogle className="h-5 w-5" />
        <span className="text-sm font-semibold leading-6">Google</span>
      </Button>
    );
  }
}

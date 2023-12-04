"use client";

import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { useSession, signIn } from "next-auth/react";

export default function GithubAuth() {
  const { data: session } = useSession();

  if (session) {
    window.location.href = "/login/welcome/form";
  } else {
    return (
      <Button
        onClick={() => signIn("github")}
        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] hover:bg-[#4b5561]"
      >
        <FaGithub className="h-5 w-5" />
        <span className="text-sm font-semibold leading-6">GitHub</span>
      </Button>
    );
  }
}

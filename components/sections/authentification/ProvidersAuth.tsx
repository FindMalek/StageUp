"use client";

import GithubAuth from "@/components/sections/authentification/GithubAuth";
import GoogleAuth from "@/components/sections/authentification/GoogleAuth";

export default function ProvidersAuth() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <GithubAuth />
      <GoogleAuth />
    </div>
  );
}

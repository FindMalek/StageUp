import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function DesktopAuthButtons() {
  return (
    <>
      <Link href="/login">
        <Button variant="outline" className="hidden lg:block">
          Se connecter
        </Button>
      </Link>
      <Link href="/register">
        <Button className="hidden lg:block">S&apos;inscrire</Button>
      </Link>
    </>
  );
}

export function MobileAuthButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <Link href="/login">
        <Button variant="outline" className="w-full">
          Se connecter
        </Button>
      </Link>
      <Link href="#">
        <Button className="w-full">S&apos;inscrire gratuitement</Button>
      </Link>
    </div>
  );
}

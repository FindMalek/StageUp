import Image from "next/image";

export default function Logo({ className, isLogo }: { className?: string, isLogo?: boolean }) {
  return (
    <Image
      className={className}
      height={32}
      width={32}
      src={isLogo ? "/logo/logo.svg" : "/logo/logo-192x192.png"}
      alt="StageUp Logo"
    />
  );
}

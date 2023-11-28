import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      height={32}
      width={32}
      src="/logo/logo.svg"
      alt="StageUp Logo"
    />
  );
}

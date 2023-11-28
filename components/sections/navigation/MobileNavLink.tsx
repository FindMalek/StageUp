import Link from "next/link";
import { Popover } from "@headlessui/react";

export default function MobileNavLink({
  children,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
}

"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import MobileNavLink from "@/components/sections/navigation/MobileNavLink";

import { headerNavLinks } from "@data/navigation";

export default function MobileAnimatePresence({ open }: { open: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <>
          <Popover.Overlay
            static
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
          />
          <Popover.Panel
            static
            as={motion.div}
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -32,
              transition: { duration: 0.2 },
            }}
            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
          >
            <div className="space-y-4">
              {headerNavLinks.map(([label, href]) => (
                <MobileNavLink key={label} href={href}>
                  {label}
                </MobileNavLink>
              ))}
            </div>
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
          </Popover.Panel>
        </>
      )}
    </AnimatePresence>
  );
}

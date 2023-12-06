"use client";

import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import MobileNavLink from "@/components/sections/navigation/MobileNavLink";
import { MobileAuthButtons } from "@/components/sections/navigation/AuthButtons";

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
            <MobileAuthButtons />
          </Popover.Panel>
        </>
      )}
    </AnimatePresence>
  );
}

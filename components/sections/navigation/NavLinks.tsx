"use client"

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import PresenceAnimate from "@/components/sections/navigation/PresenceAnimate";

import { headerNavLinks } from "@data/navigation";

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return headerNavLinks.map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:font-medium hover:delay-[150ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && <PresenceAnimate />}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ));
}

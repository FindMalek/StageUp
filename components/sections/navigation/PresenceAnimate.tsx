"use client";

import { motion } from "framer-motion";

export default function PresenceAnimate() {
  return (
    <motion.span
      className="absolute inset-0 rounded-lg bg-gray-100"
      layoutId="hoverBackground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.15 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.15, delay: 0.2 },
      }}
    />
  );
}

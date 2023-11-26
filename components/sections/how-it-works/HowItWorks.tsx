"use client";

import { useId } from "react";

import Container from "@/components/ui/Container";

import SectionHeader from "@/components/overall/SectionHeader";
import HowItWorksDesktop from "@/components/sections/how-it-works/HowItWorksDesktop";
import HowItWorksMobile from "@/components/sections/how-it-works/HowItWorksMobile";

export const steps = [
  {
    name: "Reporting",
    summary: "Stay on top of things with always up-to-date reporting features.",
    description:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
    image: "/image/screenshots/profit-loss.png",
    icon: function ReportingIcon() {
      let id = useId();
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
    },
  },
  {
    name: "Inventory",
    summary:
      "Never lose track of what’s in stock with accurate inventory tracking.",
    description:
      "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
    image: "/image/screenshots/inventory.png",
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      );
    },
  },
  {
    name: "Contacts",
    summary:
      "Organize all of your contacts, service providers, and invoices in one place.",
    description:
      "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
    image: "/image/screenshots/contacts.png",
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      );
    },
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How it works in three easy steps"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <SectionHeader
          sectionTitle="Comment ça marche ?"
          title="Trois étapes faciles"
          description="StageUp est une plateforme de mise en relation entre étudiants et entreprises. Nous vous proposons des offres de stage, d'alternance et d'emploi."
        />
        <HowItWorksMobile {...steps} />
        <HowItWorksDesktop {...steps} />
      </Container>
    </section>
  );
}

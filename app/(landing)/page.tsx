import Herosection from "@/components/sections/display/Hero";
import AboutUs from "@/components/sections/display/AboutUs";
import Advatanages from "@/components/sections/display/Advantages";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import Testimonials from "@/components/sections/display/Testimonials";
import CallToAction from "@/components/sections/display/CallToAction";
import FAQs from "@/components/sections/display/FAQs";

export default function Home() {
  return (
    <>
      <Herosection />
      <AboutUs />
      <Advatanages />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FAQs />
    </>
  );
}

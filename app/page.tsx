import Herosection from "@/components/sections/display/Hero";
import AboutUs from "@/components/sections/display/AboutUs";
import Advatanages from "@/components/sections/display/Advantages";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";

export default function Home() {
  return (
    <>
      <Herosection />
      <AboutUs />
      <Advatanages />
      <HowItWorks />
      <div>témoinaillages</div>
      <div>avantage de stageup</div>
      <div>CTA</div>
      <div>faqs</div>
      <div>sponsors & partners</div>
    </>
  );
}

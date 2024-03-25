import {
  LandingPageHero,
  HowToEarn,
  Tasks,
  SliderSection,
  // Welcome,
} from "@/components";
import Navbar from "../components/landingComponents/navbar";
import Footer from "../components/landingComponents/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPageHero />
      <HowToEarn />
      <SliderSection />
      <Tasks />
      <Footer />
      {/* <Welcome /> */}
    </main>
  );
}

import { LandingPageHero, HowToEarn, Tasks} from "@/components";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPageHero />
      <HowToEarn />
      <Tasks />
      <Footer/>
    </main>
  );
}

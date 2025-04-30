import Banner from "./Banner";
import PartnersSection from "./PartnersSection";
import ServicesHorizantalMarq from "./ServicesHorizantalMarq";
import TalentSection from "./TalentSection";
import TechStackSection from "./TechStackSection";
import VideoPart from "./VideoPart";

export default function HomeComponent() {
  return (
    <div>
      <Banner />
      <ServicesHorizantalMarq />
      <VideoPart />
      <TalentSection />
      <TechStackSection />
      <PartnersSection />
    </div>
  );
}

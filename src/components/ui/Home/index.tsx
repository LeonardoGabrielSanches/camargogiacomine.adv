import HomeSection from "./home-section";
import WorkingAreasSection from "./working-areas-section";
import WelcomeSection from "./welcome-section";
import OfficeSection from "./office-section";
import ContactSection from "./contact-section";

export default function Home() {
    return (
        <div>
            <HomeSection />
            <WelcomeSection />
            <OfficeSection />
            <WorkingAreasSection />
            <ContactSection />
        </div>
    )
}
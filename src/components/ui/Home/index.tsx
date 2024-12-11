import HomeSection from "./home-section";
import WorkingAreasSection from "./working-areas-section";
import OfficeSection from "./office-section";
import ContactSection from "./contact-section";
import ArticlesSection from "./articles-section";
import { Team } from "./team";

export function Home() {
    return (
        <div>
            <HomeSection />
            <OfficeSection />
            <Team />
            <WorkingAreasSection />
            <ArticlesSection />
            <ContactSection />
        </div>
    )
}
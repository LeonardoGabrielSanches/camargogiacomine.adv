import HomeSection from "./home-section";
import WorkingAreasSection from "./working-areas-section";
import OfficeSection from "./office-section";
import ContactSection from "./contact-section";
import ArticlesSection from "./articles-section";
import { Office2 } from "./office2";

export default function Home() {
    return (
        <div>
            <HomeSection />
            <OfficeSection />
            <WorkingAreasSection />
            <Office2 />
            <ArticlesSection />
            <ContactSection />
        </div>
    )
}
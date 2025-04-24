import { FloatingButton } from "@/components/core/FloatingButton"
import { Article } from "@/components/ui/Article"
import { Articles } from "@/components/ui/Articles"
import BPCSection from "@/components/ui/BpcLoas"
import { Home } from "@/components/ui/Home"
import { WorkingAreasPage } from "@/components/ui/WorkingAreas"
import { BrowserRouter, Route, Routes } from "react-router"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <FloatingButton />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:selector" element={<Home />} />
                <Route path="areas-atuacao/:slug" element={<WorkingAreasPage />} />
                <Route path="artigos" element={<Articles />} />
                <Route path="artigo/:slug" element={<Article />} />
                <Route path="bpcloas" element={<BPCSection />} />
            </Routes>
        </BrowserRouter>
    )
}
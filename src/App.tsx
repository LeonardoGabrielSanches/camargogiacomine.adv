import { BrowserRouter, Route, Routes } from "react-router"
import { FloatingButton } from "./components/core/FloatingButton"
import Home from "./components/ui/Home"
import { WorkingAreasPage } from "./components/ui/WorkingAreas"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:selector" element={<Home />} />
          <Route path="areas-atuacao/:slug" element={<WorkingAreasPage />} />
        </Routes>
      </BrowserRouter>
      <FloatingButton />
    </>
  )
}
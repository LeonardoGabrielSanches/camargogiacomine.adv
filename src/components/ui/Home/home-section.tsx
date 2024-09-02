import Header from "@/components/Header";
import logo from '@/assets/logo.jpg'

export default function HomeSection() {
    return (
        <section className="h-screen bg-gradient-to-r from-background via-gradient">
            <Header />
            <div className="flex flex-col w-1/2 items-center">
                <img src={logo} alt="Camargo e giacomine advogados" className="mt-24" />
                <a href="" className="flex items-center justify-center text-3xl text-background w-64 h-12 bg-foreground">Localize-nos!</a>
            </div>
        </section>
    )
}
import Header from "@/components/core/Header";
// 50 + 32 + header = 100%
export default function HomeSection() {
    return (
        <section className="h-screen bg-gradient-to-r from-background via-gradient" id="home">
            <Header />
            <section className="h-[32%] flex max-w-4xl mx-auto justify-center flex-col">
                <span className="text-4xl text-white max-w-screen-md">Estratégia jurídica para o desenvolvimento empresarial</span>
                <a href="" className="flex items-center justify-center text-3xl text-background w-64 h-12 bg-foreground mt-10">Localize-nos!</a>
            </section>
            <section className="mt-auto h-1/2 bg-foreground flex flex-col items-center justify-center">
                <h1 className="text-6xl text-[#174472] mb-2 uppercase">Bem-vindo</h1>
                <div className="w-96 h-1 bg-white mb-10" />
                <p className="text-[#1f364e] w-2/3 mx-auto text-lg">O Camargo & Giacomine é um escritório de advocacia formado por profissionais de experiência multidisciplinar e atuação pautada pela ética, competência técnica e excelência no atendimento, fornecendo suporte integral aos clientes, a fim de viabilizar negócios e solucionar problemas de forma ágil e eficaz.</p>
            </section>
        </section>
    )
}
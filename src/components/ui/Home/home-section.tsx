import Header from "@/components/core/Header";

export default function HomeSection() {
    function scroll() {
        const contact = document.getElementById("contato")

        contact?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section id="inicio" className="min-h-screen bg-gradient-to-r from-background via-gradient">
            <Header />

            <section className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-4xl mx-auto px-4 lg:px-0 min-h-[50vh]">
                <span className="text-2xl lg:text-4xl text-white max-w-full lg:max-w-screen-md">
                    Defendendo sua jornada, protegendo seu futuro.
                </span>
                <button
                    onClick={scroll}
                    className="flex items-center justify-center text-lg lg:text-3xl text-background w-48 lg:w-64 h-10 lg:h-12 bg-foreground mt-6 lg:mt-10"
                >
                    Localize-nos!
                </button>
            </section>

            <section className="bg-foreground flex flex-col items-center text-center justify-center px-4 py-8 lg:py-8 gap-6">
                <h1 className="text-4xl lg:text-6xl text-[#174472] uppercase">
                    Bem-vindo
                </h1>
                <div className="w-16 lg:w-96 h-1 bg-white" />
                <p className="text-[#1f364e] text-base lg:text-lg w-full lg:w-2/3">
                    No Camargo & Giacomine, temos como missão defender os direitos dos trabalhadores e segurados com excelência, ética e dedicação. Nosso compromisso é oferecer um atendimento humanizado, analisando cada caso com atenção e desenvolvendo estratégias jurídicas personalizadas para alcançar os melhores resultados.
                    <br /><br />
                    Com sólida experiência nas áreas de direito trabalhista e previdenciário, estamos preparados para ajudar você a superar desafios e conquistar o que é justo. Seja para resolver questões relacionadas ao ambiente de trabalho ou assegurar benefícios previdenciários, conte conosco para estar ao seu lado em todas as etapas.
                </p>
            </section>
        </section>


    )
}
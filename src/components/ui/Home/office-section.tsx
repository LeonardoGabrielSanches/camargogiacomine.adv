export default function OfficeSection() {
    return (
        <section id="escritorio" className="bg-[#101b27] text-white px-8 py-16 lg:px-32">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-[#d9d9d9] pb-4">
                    O Escritório
                </h1>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="flex flex-col items-start">
                        <div className="bg-[#d9d9d9] text-[#101b27] font-bold text-2xl rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                            01
                        </div>
                        <p className="text-lg leading-relaxed">
                            O Escritório Camargo & Giacomine nasceu do desejo de fazer a diferença na vida de trabalhadores e segurados que enfrentam desafios em busca de seus direitos. Fundado por dois profissionais apaixonados pelo Direito, o escritório é liderado pelo Dr. Aristides Jesus Camargo Filho e pelo Dr. Gabriel Giacomine, ambos formados pela renomada Faculdade de Direito de Sorocaba.
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        <div className="bg-[#d9d9d9] text-[#101b27] font-bold text-2xl rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                            02
                        </div>
                        <p className="text-lg leading-relaxed">
                            Guiados pela missão de construir uma advocacia acessível e de excelência, os doutores unem conhecimento técnico, experiência e comprometimento para assegurar justiça e dignidade a todos que nos confiam suas causas.
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        <div className="bg-[#d9d9d9] text-[#101b27] font-bold text-2xl rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                            03
                        </div>
                        <p className="text-lg leading-relaxed">
                            Seja na defesa dos direitos dos trabalhadores ou no acompanhamento de questões previdenciárias, o Camargo & Giacomine é o aliado que você pode confiar. Aqui, valorizamos cada cliente e buscamos, incansavelmente, soluções justas e efetivas.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
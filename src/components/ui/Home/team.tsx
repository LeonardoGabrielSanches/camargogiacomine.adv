import gataoImg from '@/assets/gatao.png'

export function Team() {
    return (
        <section className="bg-[#101b27] text-white px-8 py-16 lg:px-32">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-[#d9d9d9] pb-4">
                    O Escritório
                </h1>

                <p className="text-lg leading-relaxed text-center mb-16">
                    O Escritório Camargo & Giacomine nasceu do desejo de fazer a diferença na vida de trabalhadores e segurados que enfrentam desafios em busca de seus direitos. Fundado por dois profissionais apaixonados pelo Direito, o escritório é liderado pelo Dr. Aristides Jesus Camargo Filho e pelo Dr. Gabriel Giacomine, ambos formados pela renomada Faculdade de Direito de Sorocaba. Aqui, valorizamos cada cliente e buscamos, incansavelmente, soluções justas e efetivas.
                </p>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={gataoImg}
                            alt="Dr. Aristides Jesus Camargo Filho"
                            className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                        />
                        <h2 className="text-2xl font-bold mb-4">Dr. Aristides Jesus Camargo Filho</h2>
                        <p className="text-lg leading-relaxed">
                            Especialista em Direito Trabalhista e Previdenciário, o Dr. Aristides alia experiência e dedicação para assegurar justiça e dignidade a cada cliente.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src={gataoImg}
                            alt="Dr. Gabriel Giacomine"
                            className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                        />
                        <h2 className="text-2xl font-bold mb-4">Dr. Gabriel Giacomine</h2>
                        <p className="text-lg leading-relaxed">
                            Com expertise em Direito Previdenciário, o Dr. Gabriel é comprometido em oferecer atendimento personalizado e soluções eficientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
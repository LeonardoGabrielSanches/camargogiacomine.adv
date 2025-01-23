import gataoImg from '@/assets/gatao.png'
import arisImg from '@/assets/aris.jpeg'

export function Team() {
    return (
        <section className="bg-[#101b27] text-white px-8 py-16 lg:px-32 lg:-mt-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-[#d9d9d9] pb-4">
                    A Equipe
                </h1>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={arisImg}
                            alt="Dr. Aristides Jesus Camargo Filho"
                            className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                        />
                        <h2 className="text-white text-2xl font-bold mb-4">Dr. Aristides Jesus Camargo Filho</h2>
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
                        <h2 className="text-white text-2xl font-bold mb-4">Dr. Gabriel Giacomine</h2>
                        <p className="text-lg leading-relaxed">
                            Com expertise em Direito Previdenciário, o Dr. Gabriel é comprometido em oferecer atendimento personalizado e soluções eficientes.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-20">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-[#174472] text-lg font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:text-[#1f5c8e] hover:shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Fale com um advogado
                    </a>
                </div>
            </div>
        </section>
    )
}
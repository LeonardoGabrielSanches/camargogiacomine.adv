import { Link } from 'react-router'

export default function WorkingAreasSection() {
    return (
        <section id="areas-atuacao" className="bg-gradient-to-b from-[#f5f5f5] to-[#e8e8e8] text-[#1f364e] px-8 py-16 lg:px-32">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 text-[#174472]">
                        Áreas de Atuação
                    </h1>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                        No Camargo & Giacomine, combinamos experiência, ética e estratégias personalizadas para atender as necessidades de nossos clientes nas áreas de Direito Trabalhista e Previdenciário.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-[#174472]">
                            Direito Trabalhista
                        </h2>
                        <ul className="space-y-4 text-[#4a4a4a]">
                            <li>
                                <Link to="/areas-atuacao/defesa-trabalhadores" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Defesa de trabalhadores em casos de rescisão de contrato e verbas rescisórias.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/assedio-moral" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Ações de assédio moral e sexual no ambiente de trabalho.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/vinculo-empregaticio" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Reconhecimento de vínculo empregatício.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/horas-extras" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Revisão de salários, horas extras e intervalos.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/adicional-insalubridade" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Adicionais de insalubridade e periculosidade.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/acidentes-trabalho" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Defesa em casos de acidentes de trabalho e doenças ocupacionais.
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-[#174472]">
                            Direito Previdenciário
                        </h2>
                        <ul className="space-y-4 text-[#4a4a4a]">
                            <li>
                                <Link to="/areas-atuacao/aposentadoria" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Aposentadoria por idade, tempo de contribuição, invalidez e especial.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/revisao-beneficios" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Revisão de benefícios previdenciários.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/auxilios-temporarios" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Auxílios por incapacidade temporária (doença) e acidentário.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/pensao-morte" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Pensão por morte.
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/bpc-loas" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Benefícios assistenciais (BPC/LOAS).
                                </Link>
                            </li>
                            <li>
                                <Link to="/areas-atuacao/planejamento-previdenciario" className="group flex items-baseline gap-2 hover:text-[#174472]">
                                    <span className="flex-shrink-0 w-2 h-2 bg-[#174472] rounded-full group-hover:scale-125 transition-transform"></span>
                                    Planejamento previdenciário para assegurar maior segurança e benefícios justos.
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { useParams } from "react-router";

import Header from "@/components/core/Header";
import { useEffect } from "react";

export function WorkingAreasPage() {
    const params = useParams();

    useEffect(() => {
        const begin = document.getElementById("inicio")

        begin?.scrollIntoView({ behavior: 'instant', block: 'start' })

        const element = document.getElementById(params.slug ?? 'defesa-trabalhadores')

        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [params.slug])

    return (
        <section id="inicio" className="min-h-screen bg-gradient-to-b from-[#174472] to-[#d9d9d9] p-6 lg:p-16 text-[#1f364e]">
            <Header mainPage={false} />
            <div className="max-w-5xl mx-auto space-y-16 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-3xl font-semibold text-[#174472]">Direito Trabalhista</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 id="defesa-trabalhadores" className="text-xl font-bold text-[#1f364e]">
                                Defesa de trabalhadores em casos de rescisão de contrato e verbas rescisórias
                            </h3>
                            <p className="text-base text-[#101b27]">
                                A rescisão do contrato de trabalho pode ocorrer de diferentes formas, como demissão sem justa causa, demissão por justa causa, pedido de demissão ou rescisão indireta (quando o empregador comete falta grave). Nosso escritório atua para garantir que o trabalhador receba todos os direitos devidos, incluindo aviso prévio, férias proporcionais, 13º salário, multa de 40% sobre o FGTS e seguro-desemprego, quando aplicável. Também lidamos com casos de rescisões fraudulentas ou situações em que o empregador tenta justificar uma dispensa com justa causa indevidamente.
                            </p>
                        </div>
                        <div>
                            <h3 id="assedio-moral" className="text-xl font-bold text-[#1f364e]">
                                Ações de assédio moral e sexual no ambiente de trabalho
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Assédio moral e sexual são condutas abusivas que geram danos à dignidade, à saúde mental e ao bem-estar do trabalhador. Atuamos para identificar essas práticas, que podem incluir humilhações, perseguições, chantagens ou comportamento inadequado no ambiente de trabalho, garantindo a reparação dos danos sofridos e a responsabilização do empregador, que tem o dever de manter um ambiente seguro e saudável.
                            </p>
                        </div>
                        <div>
                            <h3 id="vinculo-empregaticio" className="text-xl font-bold text-[#1f364e]">
                                Reconhecimento de vínculo empregatício
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Muitos trabalhadores são contratados como autônomos, freelancers ou até mesmo como prestadores de serviços, mas desempenham atividades que configuram vínculo empregatício, como subordinação, pessoalidade, habitualidade e onerosidade. Nosso escritório trabalha para demonstrar essas características perante a Justiça do Trabalho, garantindo direitos como registro em carteira, recolhimento de FGTS e INSS, férias, 13º salário e outros benefícios previstos pela legislação.
                            </p>
                        </div>
                        <div>
                            <h3 id="horas-extras" className="text-xl font-bold text-[#1f364e]">
                                Revisão de salários, horas extras e intervalos
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Trabalhadores que realizam jornadas acima das 8 horas diárias ou 44 horas semanais têm direito ao pagamento de horas extras com adicional, que pode variar entre 50% e 100%, dependendo do caso. Também defendemos o pagamento de intervalos não concedidos (intrajornada e interjornada), além de reajustes salariais previstos em convenções coletivas ou cláusulas contratuais que foram descumpridas pelo empregador.
                            </p>
                        </div>
                        <div>
                            <h3 id="adicional-insalubridade" className="text-xl font-bold text-[#1f364e]">
                                Adicionais de insalubridade e periculosidade
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Muitas atividades profissionais expõem os trabalhadores a agentes nocivos, como químicos, biológicos, ruído ou calor excessivo, que justificam o pagamento de adicional de insalubridade. Da mesma forma, atividades que envolvem risco à vida, como trabalho com eletricidade ou inflamáveis, garantem o adicional de periculosidade. Analisamos laudos técnicos e documentos para assegurar o pagamento correto e retroativo desses direitos, quando não foram devidamente reconhecidos.
                            </p>
                        </div>
                        <div>
                            <h3 id="acidentes-trabalho" className="text-xl font-bold text-[#1f364e]">
                                Defesa em casos de acidentes de trabalho e doenças ocupacionais
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Trabalhadores que sofrem acidentes no ambiente de trabalho ou desenvolvem doenças ocupacionais (como LER/DORT ou problemas respiratórios em ambientes insalubres) têm direitos que incluem estabilidade provisória, indenizações por danos morais e materiais, além de benefícios do INSS. Prestamos assessoria para assegurar que o empregador e o órgão previdenciário cumpram suas obrigações, além de buscar compensação por perdas que comprometam a saúde e a capacidade laboral do trabalhador.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-3xl font-semibold text-[#174472]">Direito Previdenciário</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 id="aposentadoria" className="text-xl font-bold text-[#1f364e]">
                                Aposentadoria por idade, tempo de contribuição, invalidez e especial
                            </h3>
                            <p className="text-base text-[#101b27]">
                                O processo de aposentadoria pode ser complexo, pois depende do cumprimento de requisitos específicos, como idade mínima, tempo de contribuição ao INSS e atividades desempenhadas. Nosso escritório auxilia desde a análise do tempo de serviço até o requerimento e recurso em caso de negativa, incluindo aposentadoria especial para trabalhadores expostos a condições insalubres ou perigosas, garantindo o benefício mais vantajoso ao cliente.
                            </p>
                        </div>
                        <div>
                            <h3 id="revisao-beneficios" className="text-xl font-bold text-[#1f364e]">
                                Revisão de benefícios previdenciários
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Muitos segurados recebem valores incorretos de benefícios devido a erros no cálculo do INSS, como a inclusão de salários de contribuição menores ou períodos de trabalho desconsiderados. Analisamos detalhadamente os processos de concessão, identificando falhas que podem resultar em aumentos significativos nos valores recebidos.
                            </p>
                        </div>
                        <div>
                            <h3 id="auxilios-temporarios" className="text-xl font-bold text-[#1f364e]">
                                Auxílios por incapacidade temporária (doença) e acidentário
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Quando o trabalhador está temporariamente incapacitado para suas funções devido a doença ou acidente, ele tem direito a receber auxílio-doença ou auxílio-acidentário. Oferecemos suporte para garantir a concessão do benefício, com análise de laudos médicos e apresentação de recursos em caso de negativa, além de buscar a conversão para aposentadoria por invalidez, quando a incapacidade se torna permanente.
                            </p>
                        </div>
                        <div>
                            <h3 id="pensao-morte" className="text-xl font-bold text-[#1f364e]">
                                Pensão por morte
                            </h3>
                            <p className="text-base text-[#101b27]">
                                A pensão por morte é um benefício destinado aos dependentes do segurado falecido. Atuamos para garantir que cônjuges, filhos, companheiros(as) ou outros dependentes legais recebam o benefício com celeridade e no valor correto, solucionando eventuais entraves na comprovação de dependência ou vínculo.
                            </p>
                        </div>
                        <div>
                            <h3 id="bpc-loas" className="text-xl font-bold text-[#1f364e]">
                                Benefícios assistenciais (BPC/LOAS)
                            </h3>
                            <p className="text-base text-[#101b27]">
                                O BPC/LOAS (Benefício de Prestação Continuada) é voltado para pessoas idosas ou com deficiência que não têm meios de prover a própria subsistência. Representamos nossos clientes na concessão do benefício, análise de requisitos e no recurso de casos negados, buscando garantir que aqueles que mais necessitam recebam a assistência devida.
                            </p>
                        </div>
                        <div>
                            <h3 id="planejamento-previdenciario" className="text-xl font-bold text-[#1f364e]">
                                Planejamento previdenciário para assegurar maior segurança e benefícios justos
                            </h3>
                            <p className="text-base text-[#101b27]">
                                Planejar a aposentadoria é essencial para garantir segurança financeira no futuro. Oferecemos um serviço personalizado, analisando as contribuições passadas e simulando diferentes cenários para identificar a melhor estratégia, como períodos adicionais de contribuição ou migração de regimes, sempre visando o maior benefício possível para o segurado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
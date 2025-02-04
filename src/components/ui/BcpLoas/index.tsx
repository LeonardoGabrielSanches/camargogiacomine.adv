import Header from "@/components/core/Header";
import { FaUser, FaHome, FaFlag, FaBan, FaChild, FaWheelchair } from 'react-icons/fa';
import gataoImg from '@/assets/gatao.png';
import arisImg from '@/assets/aris.jpeg';

export default function BPCSection() {
    return (
        <section className="min-h-screen bg-[#101b27] text-[#E8E8E8] px-6 py-12 lg:px-32 lg:py-20 space-y-20">
            <Header mainPage={false} />

            <div className="max-w-5xl mx-auto text-center space-y-8">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#D9D9D9]">Advogados especialistas em BPC/LOAS</h1>
                <h3 className="text-xl lg:text-3xl font-bold text-[#D9D9D9]">Benefícios do INSS para Idosos de Baixa Renda e Pessoas com Deficiência</h3>
                <div className="flex justify-center">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="px-8 py-4 bg-[#174472] text-white font-semibold rounded-full hover:bg-[#12385d] transition duration-300 shadow-md"
                    >
                        Quero Receber o LOAS
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-[#D9D9D9] text-[#101b27] rounded-xl shadow-xl p-8 space-y-6 mt-10">
                <h2 className="text-2xl font-bold text-center text-[#174472]">Lute pelos seus direitos!</h2>
                <p className="text-center text-xl">Receba um benefício do INSS no valor de <b>R$1.518,00</b> por mês.</p>
                <p className="text-gray-700 text-center">O INSS pode dificultar o acesso aos seus direitos. Com apoio jurídico especializado, suas chances de sucesso aumentam.</p>
                <div className="flex justify-center">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="px-6 py-4 bg-[#174472] text-white font-semibold rounded-full hover:bg-[#12385d] transition duration-300"
                    >
                        Quero Receber
                    </a>
                </div>
            </div>


            <div className="max-w-4xl mx-auto bg-[#D9D9D9] text-[#101B27] rounded-xl p-8 shadow-lg space-y-8 mt-10">
                <h3 className="text-2xl font-bold text-center text-[#174472]">Atenção!</h3>
                <p className="text-center">O auxílio é destinado a:</p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-center text-[#174472]">Idosos</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <FaUser className="text-[#174472] w-5 h-5" />
                                Idade igual ou superior a 65 anos
                            </li>
                            <li className="flex items-center gap-3">
                                <FaHome className="text-[#174472] w-5 h-5" />
                                Famílias de baixa renda
                            </li>
                            <li className="flex items-center gap-3">
                                <FaFlag className="text-[#174472] w-5 h-5" />
                                Nacionalidade brasileira e residente no Brasil
                            </li>
                            <li className="flex items-center gap-3">
                                <FaBan className="text-[#174472] w-5 h-5" />
                                Sem outro benefício do INSS
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-center text-[#174472]">Pessoas com Deficiência</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <FaChild className="text-[#174472] w-5 h-5" />
                                Qualquer idade
                            </li>
                            <li className="flex items-center gap-3">
                                <FaWheelchair className="text-[#174472] w-5 h-5" />
                                Deficiência física, mental, intelectual ou sensorial
                            </li>
                            <li className="flex items-center gap-3">
                                <FaFlag className="text-[#174472] w-5 h-5" />
                                Nacionalidade brasileira e residente no Brasil
                            </li>
                            <li className="flex items-center gap-3">
                                <FaHome className="text-[#174472] w-5 h-5" />
                                Famílias de baixa renda
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="px-8 py-4 bg-[#174472] text-white font-semibold rounded-full hover:bg-[#12385d] transition duration-300"
                    >
                        Quero Receber o Benefício
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-4 mt-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#D9D9D9]">Nós podemos te ajudar!</h2>
                <p className="text-[#BFBFBF]">Já imaginou como um salário mínimo a mais pode mudar sua vida?</p>
                <p className="text-[#BFBFBF]">Advogados experientes prontos para garantir seus direitos.</p>
                <div className="flex justify-center">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="px-8 py-4 bg-[#174472] text-white font-semibold rounded-full hover:bg-[#12385d] transition duration-300"
                    >
                        Falar com um Especialista
                    </a>
                </div>
            </div>

            <div className="text-center space-y-6 mt-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#D9D9D9]">Quem irá te representar:</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col items-center">
                        <img
                            src={arisImg}
                            alt="Dr. Aristides Jesus Camargo Filho"
                            className="w-40 h-40 rounded-full object-cover shadow-md"
                        />
                        <p className="text-[#BFBFBF] mt-2">Dr. Aristides Jesus Camargo Filho</p>
                        <span className="text-sm text-[#d9d9d9]">Direito Trabalhista e Previdenciário</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src={gataoImg}
                            alt="Dr. Gabriel Giacomine"
                            className="w-40 h-40 rounded-full object-cover shadow-md"
                        />
                        <p className="text-[#BFBFBF] mt-2">Dr. Gabriel Giacomine</p>
                        <span className="text-sm text-[#d9d9d9]">Direito Previdenciário</span>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="px-8 py-4 bg-[#174472] text-white font-semibold rounded-full hover:bg-[#12385d] transition duration-300"
                    >
                        Consulte um Advogado
                    </a>
                </div>
            </div>
        </section>
    );
}
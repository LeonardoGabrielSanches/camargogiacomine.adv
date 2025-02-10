import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import gataoImg from '@/assets/gatao.png';
import arisImg from '@/assets/aris.jpeg';
import instagramLogo from '@/assets/instagram.svg'
import linkedinLogo from '@/assets/linkedin.svg'
import whatsappLogo from '@/assets/whatsapp.svg'
import facebookLogo from '@/assets/facebook.svg'
import advogadoImg from '@/assets/advogado-bcp.jpg';
import idososImg from '@/assets/idosos.jpg';
import idosoCofrinhoImg from '@/assets/idoso-cofrinho.jpg';
import cadeiraRodasImg from '@/assets/cadeira-rodas.jpg';
import pensativoImg from '@/assets/pensativo.avif'
import logo from '@/assets/logo.jpg';

export default function BPCSection() {
    return (
        <section className="min-h-screen bg-[#101b27] text-[#E8E8E8] py-12 lg:px-32 lg:py-20 lg:space-y-10 flex flex-col items-center">
            <div className='space-y-10 mb-10'>
                <div className="flex justify-center">
                    <img src={logo} alt="Camargo e Giacomine Advogados" className="w-64 lg:w-96 object-contain" />
                </div>

                <div className="text-center space-y-8">
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#D9D9D9]">
                        Advogados especialistas em BPC/LOAS
                    </h1>

                    <div className="bg-[#D9D9D9] flex justify-center py-6 shadow-md px-5 lg:rounded-xl">
                        <h3 className="text-xl lg:text-3xl font-bold text-[#174472]">
                            Benefícios do INSS para Idosos de Baixa Renda e Pessoas com Deficiência
                        </h3>
                    </div>

                    <p className='text-white'>Entre em contato pelo Whatsapp
                        e saiba como você pode receber.</p>

                    <div className="flex justify-center">
                        <a
                            href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                            target="_blank"
                            className="flex uppercase items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-lg shadow-green-500/50 transform hover:translate-y-1"
                        >
                            <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
                            Quero Receber o LOAS
                        </a>
                    </div>
                </div>
            </div>


            <div className="max-w-5xl relative w-full h-full lg:hidden lg:m-0">
                <img
                    src={advogadoImg}
                    alt="Advogado BCP"
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="max-w-4xl mx-auto bg-[#D9D9D9] text-[#101b27] shadow-xl p-8 space-y-6 lg:rounded-xl">
                <h2 className="text-2xl font-bold text-center text-[#174472]">Lute pelos seus direitos!</h2>
                <p className="text-center text-xl">Receba um benefício do INSS no valor de <b>R$1.518,00</b> por mês.</p>
                <p className="text-gray-700 text-center">O INSS pode dificultar o acesso aos seus direitos. Com apoio jurídico especializado, suas chances de sucesso aumentam.</p>
                <div className="flex justify-center">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="flex uppercase items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-lg shadow-green-500/50 transform hover:translate-y-1"
                    >
                        <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
                        Quero Receber o LOAS
                    </a>
                </div>
            </div>

            <div className="max-w-5xl relative w-full h-full mb-10 lg:hidden">
                <img
                    src={idososImg}
                    alt="Idosos tristes"
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="max-w-4xl mx-auto bg-white text-[#101b27] rounded-full p-8 shadow-lg text-center mb-10">
                <span className="text-xl font-bold uppercase text-[#174472]">Mas Atenção!</span>
            </div>

            <span className="text-xl font-bold uppercase text-white text-center mb-10">O auxílio é destinado a idosos de baixa renda ou pessoas com deficiência</span>

            <div className="max-w-4xl mx-auto text-white p-8 grid md:grid-cols-2 gap-8">
                <div>
                    <img
                        src={idosoCofrinhoImg}
                        alt="Idoso com seu cofrinho"
                        className="w-60 h-60 rounded-full mx-auto object-cover shadow-lg"
                    />

                    <div className="space-y-6">
                        <h4 className="text-4xl font-bold text-center text-white">Idosos</h4>
                        <ul className="space-y-4 text-base list-none">
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                O idoso que tenha idade igual ou superior a 65 anos;
                            </li>
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                Familias enquadradas como baixa renda;
                            </li>
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                O idoso deve ser de nacionalidade brasileira e residir no Brasil;
                            </li>
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                Não podem ter outro tipo de benefício ou aposentadoria do INSS
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <img
                        src={cadeiraRodasImg}
                        alt="Pessoa com cadeira de rodas"
                        className="w-60 h-60 rounded-full mx-auto object-cover shadow-lg"
                    />

                    <div className="space-y-6">
                        <h4 className="text-4xl font-bold text-center text-white">Pessoas com Deficiência</h4>
                        <ul className="space-y-4 text-base list-none">
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                A pessoa com deficiência pode ter qualquer idade;
                            </li>
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                A deficiência pode ser fisica, mental, intelectual ou sensorial, impedindo-a de trabalhar;
                            </li>
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                A criança ou adulto deve ser de nacionalidade brasileira e residir no Brasil;
                            </li>
                            <li className="flex items-center gap-4 text-xl">
                                <IoMdCheckmarkCircleOutline className="flex-shrink-0 text-white w-8 h-8" />
                                Famílias enquadradas como baixa renda.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <a
                    href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                    target="_blank"
                    className="flex uppercase text-center items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-lg shadow-green-500/50 transform hover:translate-y-1"
                >
                    <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
                    Quero receber o benefício
                </a>
            </div>

            <div className="max-w-5xl relative w-full h-full mt-10 lg:hidden">
                <img
                    src={pensativoImg}
                    alt="Idoso pensativo"
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="max-w-4xl mx-auto bg-[#D9D9D9] text-[#101b27] p-8 space-y-6 lg:rounded-xl">
                <h2 className="text-2xl font-bold text-center text-[#174472]">Nós podemos te ajudar a conseguir esse benefício!</h2>
                <p className="text-center text-xl">Já imaginou como um salário mínimo a mais por mês faria diferença na vida de sua família?</p>
                <p className="text-gray-700 text-center">Nossos advogados são experientes e estão aqui para ajudar você a ter acesso aos melhores benefícios.</p>

                <div className="max-w-4xl mx-auto bg-[#174472] text-white rounded-full p-8 shadow-lg text-center mb-10">
                    <span className="text-xl font-bold uppercase">Atendemos pessoas do Brasil inteiro</span>
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="flex uppercase items-center gap-2 text-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-lg shadow-green-500/50 transform hover:translate-y-1"
                    >
                        <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
                        Falar com um Especialista
                    </a>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center p-8 gap-8'>
                <span className="text-xl font-bold uppercase text-white text-center">Por que contratar nosso escritório?</span>
                <div className="w-1/2 h-px bg-white opacity-50"></div>
                <span className="text-xl font-bold uppercase text-white text-center">Somos especialistas no assunto</span>
                <div className="w-1/2 h-px bg-white opacity-50"></div>
                <span className="text-xl font-bold uppercase text-white text-center">Consulta online ou presencial</span>
                <div className="w-1/2 h-px bg-white opacity-50"></div>
                <span className="text-xl font-bold uppercase text-white text-center">Atendimento em todo Brasil</span>
                <div className="w-1/2 h-px bg-white opacity-50"></div>
                <span className="text-3xl font-bold uppercase text-white text-center">Converse com um advogado sem sair de casa</span>
                <div className="flex justify-center">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="flex uppercase items-center gap-2 text-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-lg shadow-green-500/50 transform hover:translate-y-1"
                    >
                        <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
                        Consultar um advogado
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-[#D9D9D9] text-[#101b27] px-24 pb-8 space-y-6 lg:rounded-xl">
                <h2 className="text-2xl font-bold text-center text-[#174472]">Quem irá te representar:</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                    <div className="flex flex-col items-center">
                        <img src={arisImg} alt="Dr. Aristides Jesus Camargo Filho" className="w-40 h-40 rounded-full object-cover shadow-md" />
                        <p className="text-[#174472] mt-2">Dr. Aristides Jesus Camargo Filho</p>
                        <span className="text-sm text-[#101b27]">Especialista em Direito Trabalhista e Previdenciário</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={gataoImg} alt="Dr. Gabriel Giacomine" className="w-40 h-40 rounded-full object-cover shadow-md" />
                        <p className="text-[#174472] mt-2">Dr. Gabriel Giacomine</p>
                        <span className="text-sm text-[#101b27]">Especialista em Direito Previdenciário</span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="flex uppercase items-center gap-2 text-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-lg shadow-green-500/50 transform hover:translate-y-1"
                    >
                        <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
                        Consulte um advogado
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex justify-center">
                    <img src={logo} alt="Camargo e Giacomine Advogados" className="w-64 lg:w-96 object-contain" />
                </div>
                <div className="flex items-center max-w-5xl mx-auto justify- gap-4 h-10 px-4 lg:px-0">
                    <a href="https://www.instagram.com/camargogiacomine.adv/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram logo" className="w-5 h-5 hover:opacity-75" />
                    </a>
                    <a href="https://www.linkedin.com/company/102332127/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="Linkedin logo" className="w-5 h-5 hover:opacity-75" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61560800206262&locale=pt_BR" target="_blank" rel="noopener noreferrer">
                        <img src={facebookLogo} alt="Facebook logo" className="w-5 h-5 hover:opacity-75" />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={whatsappLogo} alt="Whatsapp logo" className="w-5 h-5 hover:opacity-75" />
                    </a>
                </div>
            </div>
        </section>
    );
}
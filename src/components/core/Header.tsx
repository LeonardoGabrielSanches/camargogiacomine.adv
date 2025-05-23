import { useNavigate, useParams } from "react-router";

import instagramLogo from '@/assets/instagram.svg'
import linkedinLogo from '@/assets/linkedin.svg'
import whatsappLogo from '@/assets/whatsapp.svg'
import facebookLogo from '@/assets/facebook.svg'
import lawImg from '@/assets/backgound.jpg'
import logo from '@/assets/logo.jpg'


import { useEffect, useState } from "react";

type HeaderProps = {
    mainPage?: boolean
}

export default function Header({ mainPage = true }: HeaderProps) {
    const navigate = useNavigate();
    const params = useParams()

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (mainPage)
            scrollToSelector(params.selector ?? 'inicio')
    }, [mainPage, params.selector])

    function navigateTo(selector: string) {
        if (mainPage)
            scrollToSelector(selector)
        else
            navigate(`/${selector}`)


        setMenuOpen(false);
    }

    function scrollToSelector(selector: string) {
        const element = document.getElementById(selector)

        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <section className="relative">
            <div className="flex items-center max-w-5xl mx-auto justify-end gap-4 h-10 px-4 lg:px-0">
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

            <header className="flex items-center justify-between h-24 max-w-5xl mx-auto px-4 lg:px-0">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Camargo e Giacomine Advogados" className="w-40 lg:w-96" />
                </div>

                <nav className="hidden lg:flex items-center space-x-6 text-white">
                    <button onClick={() => navigateTo("inicio")} className="hover:text-hover transition-all duration-300">Início</button>
                    <button onClick={() => navigateTo("escritorio")} className="hover:text-hover transition-all duration-300">O Escritório</button>
                    <button onClick={() => navigateTo("areas-atuacao")} className="hover:text-hover transition-all duration-300">Áreas de Atuação</button>
                    <button onClick={() => navigateTo("artigos")} className="hover:text-hover transition-all duration-300">Artigos</button>
                    <button onClick={() => navigateTo("contato")} className="hover:text-hover transition-all duration-300">Contato</button>
                </nav>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white hover:text-hover">
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className={`absolute top-0 left-0 w-full h-screen bg-[hsl(211,43%,21%)] shadow-lg rounded-lg py-6 px-8 text-white transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                    <button onClick={toggleMenu} className="text-white hover:text-[#d9d9d9] transition-all duration-300 transform hover:scale-125 focus:outline-none">
                        {menuOpen ? "✖" : "☰"}
                    </button>
                    <div className="flex flex-col items-start space-y-6 h-full justify-center">
                        <button
                            onClick={() => navigateTo("inicio")}
                            className="text-lg font-semibold hover:text-[#d9d9d9] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Início
                        </button>
                        <div className="w-full h-0.5 bg-[#d9d9d9]" />
                        <button
                            onClick={() => navigateTo("escritorio")}
                            className="text-lg font-semibold hover:text-[#d9d9d9] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            O Escritório
                        </button>
                        <div className="w-full h-0.5 bg-[#d9d9d9]" />
                        <button
                            onClick={() => navigateTo("areas-atuacao")}
                            className="text-lg font-semibold hover:text-[#d9d9d9] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Áreas de Atuação
                        </button>
                        <div className="w-full h-0.5 bg-[#d9d9d9]" />
                        <button
                            onClick={() => navigateTo("artigos")}
                            className="text-lg font-semibold hover:text-[#d9d9d9] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Publicações
                        </button>
                        <div className="w-full h-0.5 bg-[#d9d9d9]" />
                        <button
                            onClick={() => navigateTo("contato")}
                            className="text-lg font-semibold hover:text-[#d9d9d9] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Contato
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-background h-screen fixed top-0 left-0 w-full lg:hidden -z-10"></div>

            <img
                src={lawImg}
                alt="Law Background"
                className="-z-10 ml-auto h-screen fixed right-0 top-0 w-2/3 object-cover hidden lg:block"
            />
        </section>
    );
}

import instagramLogo from '@/assets/instagram.svg'
import linkedinLogo from '@/assets/linkedin.svg'
import whatsappLogo from '@/assets/whatsapp.svg'
import facebookLogo from '@/assets/facebook.svg'
import lawImg from '@/assets/backgound.jpg'
import logo from '@/assets/logo.jpg'


import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function navigateTo(index: number) {
        scrollTo(0, window.innerHeight * index);
        setMenuOpen(false); // Fecha o menu em dispositivos móveis
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <section className="relative">
            {/* Links para Redes Sociais */}
            <div className="flex items-center max-w-5xl mx-auto justify-end gap-4 h-10 px-4 lg:px-0">
                <a href="https://www.instagram.com/camargogiacomine.adv/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram logo" className="w-5 h-5 hover:opacity-75" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="Linkedin logo" className="w-5 h-5 hover:opacity-75" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook logo" className="w-5 h-5 hover:opacity-75" />
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos+trabalhistas.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsappLogo} alt="Whatsapp logo" className="w-5 h-5 hover:opacity-75" />
                </a>
            </div>

            {/* Cabeçalho com Logo e Navegação */}
            <header className="flex items-center justify-between h-24 max-w-5xl mx-auto px-4 lg:px-0">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Camargo e Giacomine Advogados" className="w-40 lg:w-96" />
                </div>

                {/* Navegação para Telas Maiores */}
                <nav className="hidden lg:flex items-center space-x-6 text-white">
                    <button onClick={() => navigateTo(0)} className="hover:text-hover transition-all duration-300">Início</button>
                    <button onClick={() => navigateTo(1)} className="hover:text-hover transition-all duration-300">O Escritório</button>
                    <button onClick={() => navigateTo(2)} className="hover:text-hover transition-all duration-300">Áreas de Atuação</button>
                    <button onClick={() => navigateTo(3)} className="hover:text-hover transition-all duration-300">Publicações</button>
                    <button onClick={() => navigateTo(4)} className="hover:text-hover transition-all duration-300">Contato</button>
                </nav>

                {/* Menu Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white hover:text-hover">
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </header>

            {/* Menu Mobile Expandido */}
            {menuOpen && (
                <div className="absolute top-24 left-0 w-full bg-foreground flex flex-col items-center space-y-4 py-4 text-white">
                    <button onClick={() => navigateTo(0)} className="hover:text-hover transition-all duration-300">Início</button>
                    <button onClick={() => navigateTo(1)} className="hover:text-hover transition-all duration-300">O Escritório</button>
                    <button onClick={() => navigateTo(2)} className="hover:text-hover transition-all duration-300">Áreas de Atuação</button>
                    <button onClick={() => navigateTo(3)} className="hover:text-hover transition-all duration-300">Publicações</button>
                    <button onClick={() => navigateTo(4)} className="hover:text-hover transition-all duration-300">Contato</button>
                </div>
            )}

            {/* Imagem de Fundo */}
            <img
                src={lawImg}
                alt="Law Background"
                className="-z-10 ml-auto h-screen fixed right-0 top-0 w-2/3 object-cover hidden lg:block"
            />
        </section>
    );
}

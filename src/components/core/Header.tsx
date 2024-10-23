import instagramLogo from '@/assets/instagram.svg'
import linkedinLogo from '@/assets/linkedin.svg'
import whatsappLogo from '@/assets/whatsapp.svg'
import facebookLogo from '@/assets/facebook.svg'
import lawImg from '@/assets/backgound.jpg'
import logo from '@/assets/logo.jpg'


export default function Header() {
    function navigateTo(index: number) {
        scrollTo(0, window.innerHeight * index)
    }

    return (
        <section className='h-[18%]'>
            <div className='flex items-center max-w-5xl mx-auto justify-end gap-2 h-10'>
                <a href="https://www.instagram.com/camargogiacomine.adv/" target='_blank'><img src={instagramLogo} alt="Instagram logo" className='w-4 h-4' /></a>
                <a href="" target='_blank'><img src={linkedinLogo} alt="Linkedin logo" className='w-4 h-4' /></a>
                <a href="" target='_blank'><img src={facebookLogo} alt="Facebook logo" className='w-4 h-4' /></a>
                <a href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos+trabalhistas.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0" target='_blank'><img src={whatsappLogo} alt="Whatsapp logo" className='w-4 h-4' /></a>
            </div>

            <header className='flex items-center justify-between h-24 max-w-5xl mx-auto'>
                <div>
                    <img src={logo} alt="Camargo e giacomine advogados" className="w-72" />
                </div>
                <nav className='items-center space-x-10 text-white'>
                    <button onClick={() => navigateTo(0)} className='hover:text-hover hover:transition-all hover:duration-300'>Ínicio</button>
                    <button onClick={() => navigateTo(1)} className='hover:text-hover hover:transition-all hover:duration-300'>O Escritório</button>
                    <button onClick={() => navigateTo(2)} className='hover:text-hover hover:transition-all hover:duration-300'>Áreas de atuação</button>
                    <button onClick={() => navigateTo(3)} className='hover:text-hover hover:transition-all hover:duration-300'>Publicações</button>
                    <button onClick={() => navigateTo(4)} className='hover:text-hover hover:transition-all hover:duration-300'>Contato</button>
                </nav>
            </header>

            <img src={lawImg} alt="" className="-z-30 ml-auto h-screen fixed right-0 top-0 w-2/3" />
        </section>
    )
}
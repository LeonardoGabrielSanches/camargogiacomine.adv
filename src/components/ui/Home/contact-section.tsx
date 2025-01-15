import instagramLogo from '@/assets/instagram-blue.svg'
import linkedinLogo from '@/assets/linkedin-blue.svg'
import whatsappLogo from '@/assets/whatsapp-blue.svg'
import facebookLogo from '@/assets/facebook-blue.svg'

export default function ContactSection() {
    return (
        <section id="contato" className="bg-[#d9d9d9] flex flex-col lg:flex-row justify-center lg:justify-evenly items-center py-16 text-[#1f364e] gap-10 lg:gap-0 px-4">
            <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_API_KEY}&place_id=ChIJs5EOG8TZxZQRFkUvVjJRe6w`}
                className="w-full lg:w-[600px] h-[300px] lg:h-[450px] rounded-md shadow-md"
                loading="lazy"
                title="Camargo e Giacomine Advogados"
            ></iframe>

            <div className="flex flex-col w-full lg:w-auto">
                <h1 className="text-2xl lg:text-4xl mb-8 lg:mb-14 text-center lg:text-left">Contato</h1>

                <div className="flex flex-col mb-6 lg:mb-8">
                    <span className="text-[#174472] text-xl">Whatsapp</span>
                    <span className="text-md">(15) 99768-1165</span>
                </div>

                <div className="flex flex-col mb-6 lg:mb-8">
                    <span className="text-[#174472] text-xl">Email</span>
                    <span className="text-md">camargogiacomine.adv@gmail.com</span>
                </div>

                <div className="flex flex-col mb-6 lg:mb-8">
                    <span className="text-[#174472] text-xl">Endereço</span>
                    <span className="text-md">R. Dr. Prudente de Moraes, 792 - Centro, Tatuí - SP, 18275-110</span>
                </div>

                <div className="flex flex-col mb-6 lg:mb-8">
                    <span className="text-[#174472] text-lg">Nossas redes</span>
                    <div className="flex gap-3 mt-2 justify-center lg:justify-start">
                        <a href="https://www.instagram.com/camargogiacomine.adv/" target="_blank">
                            <img src={instagramLogo} alt="Instagram logo" className="w-6 h-6 hover:opacity-75" />
                        </a>
                        <a href="https://www.linkedin.com/company/102332127/admin/page-posts/published/" target="_blank">
                            <img src={linkedinLogo} alt="Linkedin logo" className="w-6 h-6 hover:opacity-75" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61560800206262&locale=pt_BR" target="_blank">
                            <img src={facebookLogo} alt="Facebook logo" className="w-6 h-6 hover:opacity-75" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos+trabalhistas.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0" target="_blank">
                            <img src={whatsappLogo} alt="Whatsapp logo" className="w-6 h-6 hover:opacity-75" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}

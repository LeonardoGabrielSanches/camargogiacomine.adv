import instagramLogo from '@/assets/instagram.svg'
import linkedinLogo from '@/assets/linkedin.svg'
import whatsappLogo from '@/assets/whatsapp.svg'
import facebookLogo from '@/assets/facebook.svg'

export default function ContactSection() {
    return (
        <section className="bg-[#d9d9d9] flex justify-evenly py-16 text-[#1f364e]">
            <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_API_KEY}&q=Camargo+%26+Giacomine+Advogados`}
                width="600"
                height="450"
                loading="lazy">
            </iframe>



            <div className="flex flex-col">
                <h1 className="text-4xl mb-14">Contato</h1>
                <div className="flex flex-col mb-8">
                    <span className="text-[#174472] text-lg">Whatsapp</span>
                    <span className="text-sm">(15) 99768-1165</span>
                </div>

                <div className="flex flex-col mb-8">
                    <span className="text-[#174472] text-lg">Email</span>
                    <span className="text-sm">email@email.com.br</span>
                </div>

                <div className="flex flex-col mb-8">
                    <span className="text-[#174472] text-lg">Endereço</span>
                    <span className="text-sm">R. Dr. Prudente de Moraes, 792 - Centro, Tatuí - SP, 18275-110</span>
                </div>

                <div className="flex flex-col mb-8">
                    <span className="text-[#174472] text-lg">Nossas redes</span>
                    <div className='flex gap-1 fill-[#174472]'>
                        <a href="https://www.instagram.com/camargogiacomine.adv/" target='_blank'>
                            <img src={instagramLogo} alt="Instagram logo" className="w-4 h-4" />
                        </a>
                        <a href="" target='_blank'>
                            <img src={linkedinLogo} alt="Linkedin logo" className='w-4 h-4' />
                        </a>
                        <a href="" target='_blank'>
                            <img src={facebookLogo} alt="Facebook logo" className='w-4 h-4' />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos+trabalhistas.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0" target='_blank'>
                            <img src={whatsappLogo} alt="Whatsapp logo" className='w-4 h-4' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

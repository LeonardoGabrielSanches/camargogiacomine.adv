import cityImage from '@/assets/city.avif'

export default function ContactSection() {
    return (
        <section className="h-screen bg-[#d9d9d9] flex justify-evenly py-16 text-[#1f364e]">
            <img src={cityImage} alt="Cidade em preto e branco" />
            <div className='flex flex-col'>
                <h1 className="text-4xl mb-14">Contato</h1>
                <div className='flex flex-col mb-8'>
                    <span className='text-[#174472] text-lg'>Whatsapp</span>
                    <span className='text-sm'>(15) 999999999</span>
                </div>

                <div className='flex flex-col mb-8'>
                    <span className='text-[#174472] text-lg'>Email</span>
                    <span className='text-sm'>email@email.com.br</span>
                </div>
            </div>
        </section>
    )
}
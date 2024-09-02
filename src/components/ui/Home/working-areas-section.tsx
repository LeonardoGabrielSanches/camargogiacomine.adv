import lawBooks from '@/assets/books.jpg'

export default function WorkingAreasSection() {
    return (
        <section className="h-screen bg-white text-[#1f364e] px-32 py-16 flex">
            <div className='w-1/2'>
                <h1 className="text-4xl mb-14">Áreas de atuação</h1>
                <p className='text-base mb-10'>Com anos de experiência, nossos advogados possuem profundo conhecimento das legislações previdenciária e trabalhista, o que nos permite atuar com assertividade em casos complexos e garantir os melhores resultados para nossos clientes. Seja para questões relacionadas a benefícios previdenciários, aposentadorias, revisões ou litígios trabalhistas, estamos preparados para fornecer a orientação jurídica necessária.</p>
                <ul className='list-disc'>
                    <li className='list-inside'>Reclamações trabalhistas</li>
                    <li className='list-inside'>Horas extras</li>
                    <li className='list-inside'>Adicional de Periculosidade/Insalubridade</li>
                    <li className='list-inside'>Aposentadoria</li>
                    <li className='list-inside'>Pensão por morte</li>
                    <li className='list-inside'>BPC LOAS</li>
                    <li className='list-inside'>Entre outras</li>
                </ul>
            </div>
            <div className='w-1/2 flex'>
                <img src={lawBooks} alt="Livros de advocacia" />
            </div>
        </section>
    )
}
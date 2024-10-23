
import background from '@/assets/articles-background.jpg'
import articles from '@/articles.json'
import passa from '@/assets/passarinho.jpg'

export default function ArticlesSection() {
    return (
        <section className="h-screen bg-[#101b27] text-white flex flex-col items-center justify-center">
            <img src={background} alt="" className='absolute opacity-10 object-cover min-h-full min-w-full' />
            <div className='px-32 py-16 z-50 gap-20 flex flex-col'>
                <h1 className="text-4xl text-center">Conheça nossos artigos</h1>

                <div className="flex gap-16 items-center justify-center">
                    {articles.highlighted.map(article => (
                        <div className="flex flex-col items-center text-center gap-10 bg-[#174472]">
                            <img src={passa} alt="" className='w-64 h-48' />
                            <p>{article.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
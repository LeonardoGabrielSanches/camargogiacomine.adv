import articles from '@/articles.json'
import { Link } from 'react-router'

export default function ArticlesSection() {
    return (
        <section id="artigos" className="min-h-screen bg-[#174472] text-white flex flex-col items-center justify-center">
            <div className="px-4 lg:px-32 py-8 lg:py-16 z-50 gap-10 lg:gap-20 flex flex-col w-full">
                <h1 className="text-2xl lg:text-4xl text-center">Conheça nossos artigos</h1>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-12 w-full">
                    {articles.highlighted.map((article, index) => (
                        <Link
                            key={index}
                            to={`/artigo/${article.slug}`}
                            className="flex flex-col items-center text-center gap-4 w-full sm:w-[48%] lg:w-[30%] bg-[#d9d9d9] border border-[#d9d9d9] rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={`/assets/${article.image}`}
                                alt={`Imagem do artigo ${index + 1}`}
                                className="w-full h-40 object-cover rounded-t-md"
                            />
                            <h1 className="text-lg lg:text-xl font-bold text-gray-800">{article.title}</h1>
                            <p className="text-gray-600 text-sm">{article.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
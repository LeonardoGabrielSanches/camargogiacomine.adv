import articles from '@/articles.json'

export default function ArticlesSection() {
    return (
        <section className="h-2/3 bg-[#174472] text-white flex flex-col items-center justify-center">
            <div className='px-32 py-16 z-50 gap-20 flex flex-col'>
                <h1 className="text-4xl text-center">Conheça nossos artigos</h1>

                <div className="flex justify-between gap-4 px-6 max-w-6xl">
                    {articles.highlighted.map((article, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center gap-4 w-1/3 bg-[#d9d9d9] border border-[#d9d9d9] rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={`/assets/${article.image}`}
                                alt={`Imagem do artigo ${index + 1}`}
                                className="w-full h-40 object-cover rounded-t-md"
                            />
                            <h1 className="text-xl font-bold text-gray-800">{article.title}</h1>
                            <p className="text-gray-600 text-sm">{article.excerpt}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
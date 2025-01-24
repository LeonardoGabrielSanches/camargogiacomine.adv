import { fetchHygraphData } from '@/lib/graphql';
import { gql } from 'graphql-request'
import { useQuery } from 'react-query';
import { Link } from 'react-router'

const query = gql`
query GetArticles {
  articles(where: {emDestaque: true}) {
    titulo
    imagem {
      url
    }
    excerto
    slug
  }
}
`

export default function ArticlesSection() {
    const { data } = useQuery<{ articles: [{ titulo: string, imagem: { url: string }, excerto: string, slug: string }] }>({
        queryKey: ['articles'],
        queryFn: async () => await fetchHygraphData(query),
    });

    return (
        <section id="artigos" className="min-h-screen bg-[#174472] text-white flex flex-col items-center justify-center">
            <div className="px-4 lg:px-32 py-8 lg:py-16 z-50 gap-10 lg:gap-20 flex flex-col w-full">
                <h1 className="text-2xl lg:text-4xl text-center">Conheça nossos artigos</h1>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-12 w-full">
                    {data?.articles.map((article, index) => (
                        <Link
                            key={index}
                            to={`/artigo/${article.slug}`}
                            className="flex flex-col items-center text-center gap-4 w-full sm:w-[48%] lg:w-[30%] bg-[#d9d9d9] border border-[#d9d9d9] rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={article.imagem.url}
                                alt={article.titulo}
                                className="w-full h-40 object-cover rounded-t-md"
                            />
                            <h1 className="text-lg lg:text-xl font-bold text-gray-800">{article.titulo}</h1>
                            <p className="text-gray-600 text-sm">{article.excerto}</p>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                    <Link
                        to="/artigos"
                        className="px-8 py-4 text-base lg:text-lg bg-[#d9d9d9] text-gray-800 font-bold rounded-lg hover:bg-[#bfbfbf] transition-all duration-300"
                    >
                        Ver todos os artigos
                    </Link>
                </div>
            </div>
        </section>
    )
}
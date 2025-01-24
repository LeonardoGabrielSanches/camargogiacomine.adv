import Header from "@/components/core/Header";
import { fetchHygraphData } from "@/lib/graphql";
import { gql } from "graphql-request"
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router";

const query = gql`
query GetArticles {
  articles(orderBy: createdAt_DESC) {
    titulo
    imagem {
      url
    }
    excerto
    slug
  }
}
`

export function Articles() {
    useEffect(() => {
        const begin = document.getElementById("artigos")

        begin?.scrollIntoView({ behavior: 'instant', block: 'start' })

    }, [])

    const { data } = useQuery<{ articles: [{ titulo: string, imagem: { url: string }, excerto: string, slug: string }] }>({
        queryKey: ['articles'],
        queryFn: async () => await fetchHygraphData(query),
    });

    return (
        <section id="artigos" className="min-h-screen bg-gradient-to-b from-[#174472] to-[#d9d9d9] p-6 lg:p-16 text-[#1f364e]">
            <Header mainPage={false} />
            <div className="max-w-5xl mx-auto space-y-16 mt-10">
                <h1 className="text-3xl lg:text-4xl font-semibold text-center text-white drop-shadow-md">
                    Todos os Artigos
                </h1>

                <div className="space-y-8">
                    {data?.articles.map((article, index) => (
                        <Link
                            key={index}
                            to={`/artigo/${article.slug}`}
                            className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <img
                                src={article.imagem.url}
                                alt={article.titulo}
                                className="w-full lg:w-1/3 h-40 lg:h-auto object-cover"
                            />
                            <div className="flex flex-col justify-center p-6 space-y-4">
                                <h2 className="text-xl lg:text-2xl font-bold text-[#1f364e]">{article.titulo}</h2>
                                <p className="text-base text-[#101b27]">{article.excerto}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
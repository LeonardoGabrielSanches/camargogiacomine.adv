import { useEffect } from "react";
import { useParams } from "react-router";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

import Header from "@/components/core/Header";

const query = gql`
query GetArticles($slug: String!) {
  articles(where: { slug: $slug }) {
    titulo
    imagem {
      url
    }
    conteudo {
      html
    }
  }
}
`

function getPageTitle(error: unknown, isLoading: boolean, articles: [{ titulo: string }]) {
    return error || articles.length <= 0 ?
        (<h1 className="text-4xl font-bold text-[#174472] text-center">Artigo não encontrado</h1>) : isLoading ?
            (<h1 className="text-4xl font-bold text-[#174472] text-center">Carregando...</h1>)
            : <h1 className="text-4xl font-bold text-[#174472] text-center">{articles[0].titulo}</h1>
}

export function Articles() {
    const params = useParams();

    useEffect(() => {
        const begin = document.getElementById("inicio")

        begin?.scrollIntoView({ behavior: 'instant', block: 'start' })

        const element = document.getElementById(params.slug ?? 'defesa-trabalhadores')

        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [params.slug])

    const { data, isLoading, error } = useQuery<{ articles: [{ titulo: string, imagem: { url: string }, conteudo: { html: string } }] }>({
        queryKey: ['articles', params.slug],
        queryFn: async () => await request(import.meta.env.VITE_GRAPHQL_ENDPOINT, query, { slug: params.slug }),
        enabled: !!params.slug,
    });

    if (!data)
        return <h1>Erro na aplicação</h1>

    return (
        <section id="inicio" className="min-h-screen bg-gradient-to-b from-[#174472] to-[#d9d9d9] p-6 lg:p-16 text-[#1f364e]">
            <Header mainPage={false} />
            <div className="max-w-5xl mx-auto mt-12 space-y-16">
                <div className="bg-white p-10 rounded-xl shadow-2xl space-y-8">

                    {getPageTitle(error, isLoading, data.articles)}

                    <div className="space-y-8">
                        <img
                            src={data.articles[0].imagem.url}
                            alt={data.articles[0].titulo}
                            className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
                        />
                        <div className="space-y-12" dangerouslySetInnerHTML={{ __html: data.articles[0].conteudo.html }} />
                    </div>
                </div>
            </div>
        </section>

    )
}
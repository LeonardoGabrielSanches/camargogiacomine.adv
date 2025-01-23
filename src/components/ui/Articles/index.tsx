import { useEffect } from "react";
import { useParams } from "react-router";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

import Header from "@/components/core/Header";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

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

function getPageTitle(error: unknown, articles: [{ titulo: string }]) {
    return error || articles.length <= 0 ?
        (<h1 className="text-4xl font-bold text-[#174472] text-center">Artigo não encontrado</h1>)
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

    return (
        <section id="inicio" className="min-h-screen bg-gradient-to-b from-[#174472] to-[#d9d9d9] p-6 lg:p-16 text-[#1f364e]">
            <Header mainPage={false} />
            <div className="max-w-5xl mx-auto mt-12 space-y-16">
                <div className="bg-white p-10 rounded-xl shadow-2xl space-y-8">
                    {isLoading ? (
                        <div>
                            <Skeleton height={120} />
                            <Skeleton height={240} />
                            <Skeleton count={20} />
                        </div>
                    ) : (
                        <>
                            {getPageTitle(error, data?.articles ?? [{ titulo: "Artigo não encontrado" }])}

                            <div className="space-y-8">
                                <img
                                    src={data?.articles[0].imagem.url}
                                    alt={data?.articles[0].titulo}
                                    className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
                                />
                                <div id="conteudo-artigo" className="space-y-6" dangerouslySetInnerHTML={{ __html: data?.articles[0].conteudo.html ?? '' }} />
                            </div>
                        </>
                    )}
                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos.+Voc%C3%AAs+poderiam+me+ajudar%3F&type=phone_number&app_absent=0"
                            target="_blank"
                            className="px-6 py-3 uppercase bg-[#174472] text-white rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-[#0f3556] focus:outline-none"
                        >
                            Fale Conosco
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { whatsappUrl } from "@/utils/urls";
import { ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";

type BPCLoasModalProps = {
    handleToggleModal: () => void
}

type AnswerTypes = 'idade' | 'deficiencia' | 'renda' | 'cadunico' | 'beneficio'

type Answer = {
    idade: string | null
    deficiencia: string | null
    renda: string | null
    cadunico: string | null
    beneficio: string | null
}


export function BPCLoasModal({ handleToggleModal }: BPCLoasModalProps) {
    const [successFailModal, setSuccessFailModal] = useState<{ isVisible: boolean, message: ReactNode }>({ isVisible: false, message: null })

    const [answers, setAnswers] = useState<Answer>({
        idade: null,
        deficiencia: null,
        renda: null,
        cadunico: null,
        beneficio: null,
    });

    function handleChange(name: AnswerTypes, value: string) {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value,
        }));
    };

    function cannotBpcLoas() {
        const { idade, deficiencia, renda, beneficio } = answers

        return idade == "menos_65" && deficiencia == "nao"
            || renda == "nao"
            || beneficio == "sim"
    }

    const isButtonDisabled = !answers.idade || !answers.deficiencia || !answers.renda || !answers.beneficio || !answers.cadunico

    function handleSubmit() {
        if (cannotBpcLoas())
            setSuccessFailModal({
                isVisible: true, message: (<>
                    <div className="text-4xl">⚠️</div>
                    <h2 className="text-xl font-bold">Com base nas suas respostas, infelizmente você não preenche os requisitos para solicitar o BPC/LOAS neste momento.</h2>

                    <button
                        className="bg-[#101b27] hover:bg-[#16293d] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                        onClick={handleToggleModal}
                    >
                        Fechar
                    </button>
                </>)
            })

        else
            setSuccessFailModal({
                isVisible: true, message: (
                    <>
                        <div className="text-4xl">✅</div>
                        <h2 className="text-xl font-bold">Com base nas suas respostas, você pode ter direito ao BPC/LOAS.</h2>
                        <p className="text-sm text-gray-700">Clique no botão abaixo e fale com nosso advogado para analisarmos seu caso com mais detalhes!</p>

                        <button
                            className="bg-[#101b27] hover:bg-[#16293d] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                            onClick={() => {
                                const age = answers.idade == "menos_65" ? "\n\nPossuo menos de 65 anos de idade" : "\n\nPossuo mais de 65 anos de idade"
                                const disability = answers.deficiencia == "sim" ? "\n\nPossuo deficiência" : "\n\nNão possuo deficiência"
                                const cadUnico = answers.cadunico == "sim" ? "\n\nJá sou inscrito no Cadastro Único" : "\n\nAinda não sou inscrito no Cadastro Único"

                                const message = encodeURIComponent(
                                    `Olá! Tenho algumas dúvidas sobre meus direitos. Vocês poderiam me ajudar?${age}${disability}${cadUnico}`);
                                window.open(whatsappUrl(message), "_blank")
                            }}
                        >
                            Falar com advogado
                        </button>
                    </>)
            })

    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40 px-4">
                <div className="bg-white text-black rounded-2xl p-6 w-full max-w-screen-lg max-h-[80vh] overflow-y-auto relative">
                    <button
                        onClick={handleToggleModal}
                        className="absolute top-5 right-4 text-2xl text-gray-600 hover:text-black z-50"
                    >
                        <IoMdClose />
                    </button>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center">Checklist: Você tem direito ao BPC/LOAS?</h2>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">1. Qual a sua idade?</p>
                                <div className="space-y-2 pl-4">
                                    <label><input type="radio" name="idade" value="menos_65" checked={answers.idade == "menos_65"} onChange={(e) => handleChange('idade', e.target.value)} /> Menos de 65 anos</label><br />
                                    <label><input type="radio" name="idade" value="mais_65" checked={answers.idade == "mais_65"} onChange={(e) => handleChange('idade', e.target.value)} /> 65 anos ou mais</label>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold">2. Você possui alguma deficiência física, mental, intelectual ou sensorial de longo prazo?</p>
                                <div className="space-y-2 pl-4">
                                    <label><input type="radio" name="deficiencia" value="sim" checked={answers.deficiencia == "sim"} onChange={e => handleChange('deficiencia', e.target.value)} /> Sim</label><br />
                                    <label><input type="radio" name="deficiencia" value="nao" checked={answers.deficiencia == "nao"} onChange={e => handleChange('deficiencia', e.target.value)} /> Não</label>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold">3. A renda por pessoa da sua família é de até 1/4 do salário mínimo?</p>
                                <p className="text-sm pl-4">(1/4 do salário mínimo atualmente equivale a R$ 379,50)</p>
                                <div className="space-y-2 pl-4">
                                    <label><input type="radio" name="renda" value="sim" checked={answers.renda == "sim"} onChange={e => handleChange('renda', e.target.value)} /> Sim</label><br />
                                    <label><input type="radio" name="renda" value="nao" checked={answers.renda == "nao"} onChange={e => handleChange('renda', e.target.value)} /> Não</label>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold">4. Você ou alguém da sua família está inscrito no Cadastro Único (CadÚnico)?</p>
                                <div className="space-y-2 pl-4">
                                    <label><input type="radio" name="cadunico" value="sim" checked={answers.cadunico == "sim"} onChange={e => handleChange('cadunico', e.target.value)} /> Sim</label><br />
                                    <label><input type="radio" name="cadunico" value="nao" checked={answers.cadunico == "nao"} onChange={e => handleChange('cadunico', e.target.value)} /> Não</label>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold">5. Você já recebe algum benefício do INSS (como aposentadoria, pensão, auxílio-doença, etc.)?</p>

                                <div className="space-y-2 pl-4">
                                    <label><input type="radio" name="beneficio" value="sim" checked={answers.beneficio == "sim"} onChange={e => handleChange('beneficio', e.target.value)} /> Sim</label><br />
                                    <label><input type="radio" name="beneficio" value="nao" checked={answers.beneficio == "nao"} onChange={e => handleChange('beneficio', e.target.value)} /> Não</label>
                                </div>
                            </div>

                            <div className="pt-6 flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-[#101b27] hover:bg-[#16293d] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 disabled:opacity-55"
                                    disabled={isButtonDisabled}
                                >
                                    Tenho direito ao BPC/LOAS?
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {successFailModal.isVisible
                && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
                        <div className="bg-white text-black rounded-2xl p-6 w-full max-w-screen-lg max-h-[80vh] overflow-y-auto relative">
                            <button
                                onClick={handleToggleModal}
                                className="absolute top-5 right-4 text-2xl text-gray-600 hover:text-black z-50"
                            >
                                <IoMdClose />
                            </button>
                            <div className="text-center space-y-4 mt-6">
                                {successFailModal.message}
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}
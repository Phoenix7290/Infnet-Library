import Link from "next/link";

const categorias = ["TP1", "TP2", "TP3", "AT", "Prata", "Ouro"];

export default function DisciplinaPage({
    params,
}: {
    params: { bloco: string; disciplina: string };
}) {
    const { bloco, disciplina } = params;

    return (
        <div>
            <h1>Disciplina: {disciplina}</h1>
            {categorias.map((categoria) => (
                <Link
                    key={categoria}
                    href={`/blocos/${bloco}/${disciplina}/${categoria}`}
                >
                    <p>{categoria}</p>
                </Link>
            ))}
        </div>
    );
}

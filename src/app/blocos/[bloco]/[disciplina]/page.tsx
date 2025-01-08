import Link from "next/link";

const dificuldades = ["tp1", "tp2", "tp3", "at"];

export default function DisciplinaPage({
    params,
}: {
    params: { bloco: string; disciplina: string };
}) {
    const { bloco, disciplina } = params;

    return (
        <div>
            <h1>Disciplina: {disciplina}</h1>
            {dificuldades.map((dificuldade) => (
                <Link
                    key={dificuldade}
                    href={`/blocos/${bloco}/${disciplina}/${dificuldade}`}
                >
                    <p>{dificuldade}</p>
                </Link>
            ))}
        </div>
    );
}

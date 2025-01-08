import Link from "next/link";
import fs from "fs";
import path from "path";

export async function generateStaticParams({ params }: { params: { bloco: string; disciplina: string; dificuldade: string } }) {
    const questoesDir = path.join(
        process.cwd(),
        `data/blocos/${params.bloco}/${params.disciplina}/${params.dificuldade}`
    );
    const arquivos = fs.readdirSync(questoesDir);
    return arquivos.map((file) => ({ questao: file.replace(".md", "") }));
}

export default function DificuldadePage({ params }: { params: { bloco: string; disciplina: string; dificuldade: string } }) {
    const questoes = Array.from({ length: 16 }, (_, i) => i + 1); // Substituir com o gerador real

    return (
        <div>
            <h1>Dificuldade: {params.dificuldade}</h1>
            {questoes.map((questao) => (
                <Link
                    key={questao}
                    href={`/blocos/${params.bloco}/${params.disciplina}/${params.dificuldade}/${questao}`}
                >
                    <a>Questão {questao}</a>
                </Link>
            ))}
        </div>
    );
}

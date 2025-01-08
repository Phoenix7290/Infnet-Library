import Link from "next/link";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
    const blocosDir = path.join(process.cwd(), "src/data/blocos");
    const blocos = fs.readdirSync(blocosDir);

    const params = [];

    for (const bloco of blocos) {
        const disciplinasDir = path.join(blocosDir, bloco);
        const disciplinas = fs.readdirSync(disciplinasDir);

        for (const disciplina of disciplinas) {
            const categoriasDir = path.join(disciplinasDir, disciplina);
            const categorias = fs.readdirSync(categoriasDir);

            for (const categoria of categorias) {
                const questoesDir = path.join(categoriasDir, categoria);
                const questoes = fs.readdirSync(questoesDir).filter((file) =>
                    file.endsWith(".md")
                );

                for (const questao of questoes) {
                    params.push({
                        bloco,
                        disciplina,
                        categoria,
                        questao: questao.replace(".md", ""),
                    });
                }
            }
        }
    }

    return params;
}

export default function CategoriaPage({
    params,
}: {
    params: { bloco: string; disciplina: string; categoria: string };
}) {
    const { bloco, disciplina, categoria } = params;

    // Diretório da categoria
    const questoesDir = path.join(
        process.cwd(),
        `src/data/blocos/${bloco}/${disciplina}/${categoria}`
    );

    // Obtenha todas as questões disponíveis
    const questoes = fs
        .readdirSync(questoesDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(".md", ""));

    return (
        <div>
            <h1>
                {disciplina.toUpperCase()} - {categoria.toUpperCase()}
            </h1>
            <ul>
                {questoes.map((questao) => (
                    <li key={questao}>
                        <Link
                            href={`/blocos/${bloco}/${disciplina}/${categoria}/${questao}`}
                        >
                            Questão {questao}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

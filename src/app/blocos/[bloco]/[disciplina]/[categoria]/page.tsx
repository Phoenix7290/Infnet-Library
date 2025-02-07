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

export default async function CategoriaPage({
    params,
}: {
    params: { bloco: string; disciplina: string; categoria: string };
}) {
    const { bloco, disciplina, categoria } = await params;
    const questoesDir = path.join(
        process.cwd(),
        `src/data/blocos/${bloco}/${disciplina}/${categoria}`
    );
    const questoes = fs
        .readdirSync(questoesDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(".md", ""));

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
            <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-8">
                {disciplina.toUpperCase()} - {categoria.toUpperCase()}
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <ul className="space-y-4">
                    {questoes.map((questao) => (
                        <li key={questao} className="transform hover:translate-x-2 transition-transform duration-200">
                            <Link
                                href={`/blocos/${bloco}/${disciplina}/${categoria}/${questao}`}
                                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                <span className="text-blue-500 dark:text-blue-400">•</span>
                                <span className="text-lg">Questão {questao}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
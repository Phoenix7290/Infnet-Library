import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function QuestaoPage({
    params,
}: {
    params: { bloco: string; disciplina: string; categoria: string; questao: string };
}) {
    const { bloco, disciplina, categoria, questao } = params;
    const filePath = path.join(
        process.cwd(),
        `src/data/blocos/${bloco}/${disciplina}/${categoria}/${questao}.md`
    );

    if (!fs.existsSync(filePath)) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
                <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 rounded">
                    <p className="font-bold">Erro</p>
                    <p>Arquivo não encontrado: {filePath}</p>
                </div>
            </div>
        );
    }

    const markdownContent = fs.readFileSync(filePath, "utf-8");

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-8">
                    Questão {questao}
                </h1>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <article className="prose dark:prose-invert prose-blue max-w-none">
                        <ReactMarkdown className="text-gray-900 dark:text-gray-100">{markdownContent}</ReactMarkdown>
                    </article>
                </div>
            </div>
        </div>
    );
}
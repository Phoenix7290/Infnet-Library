import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function QuestaoPage({
    params,
}: {
    params: { bloco: string; disciplina: string; categoria: string; questao: string };
}) {
    const { bloco, disciplina, categoria, questao } = params;

    // Caminho do arquivo Markdown
    const filePath = path.join(
        process.cwd(),
        `src/data/blocos/${bloco}/${disciplina}/${categoria}/${questao}.md`
    );

    // Verifique se o arquivo existe
    if (!fs.existsSync(filePath)) {
        return <div>Arquivo não encontrado: {filePath}</div>;
    }

    // Leia o conteúdo do arquivo Markdown
    const markdownContent = fs.readFileSync(filePath, "utf-8");

    return (
        <div>
            <h1>Questão {questao}</h1>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
}
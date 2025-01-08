import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function QuestaoPage({
    params,
}: {
    params: { bloco: string; disciplina: string; dificuldade: string; questao: string };
}) {
    const { bloco, disciplina, dificuldade, questao } = params;

    const filePath = path.join(
        process.cwd(),
        `data/blocos/${bloco}/${disciplina}/${dificuldade}/${questao}.md`
    );
    const markdown = fs.readFileSync(filePath, "utf-8");

    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

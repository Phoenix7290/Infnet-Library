import Link from "next/link";

const disciplinas: { [key: string]: string[] } = {
    "Fundamentos": ["HTML-CSS", "JS1", "Interatividade-Web", "JS2"],
    "Front-End": ["React-Fundamentos", "Mobile-First", "React-Web", "React-Native"],
};

export async function generateStaticParams() {
    const blocos = ["Fundamentos", "Front-end"];
    return blocos.map((bloco) => ({ bloco }));
}

export default function BlocoPage({ params }: { params: { bloco: string } }) {
    const { bloco } = params;

    return (
        <div>
            <h1>Bloco: {bloco}</h1>
            {disciplinas[bloco]?.map((disciplina) => (
                <Link key={disciplina} href={`/blocos/${bloco}/${disciplina}`}>
                    <p>{disciplina}</p>
                </Link>
            ))}
        </div>
    );
}
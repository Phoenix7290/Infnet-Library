import Link from "next/link";

const disciplinas: { [key: string]: string[] } = {
    fundamentos: ["html-css", "js"],
    "front-end": ["react"],
};

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

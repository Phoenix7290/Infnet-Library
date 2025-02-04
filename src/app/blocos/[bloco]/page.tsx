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
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
            <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-8">
                Bloco: {bloco}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {disciplinas[bloco]?.map((disciplina) => (
                    <Link key={disciplina} href={`/blocos/${bloco}/${disciplina}`}>
                        <div className="transform hover:scale-105 transition-all duration-300">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl">
                                <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
                                    {disciplina}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
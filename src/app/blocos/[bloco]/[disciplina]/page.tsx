import Link from "next/link";

const todasCategorias = ["TP1", "TP2", "TP3", "AT", "Prata", "Ouro"];

export default function DisciplinaPage({
    params,
}: {
    params: { bloco: string; disciplina: string };
}) {
    const { bloco, disciplina } = params;
    const categorias = bloco === "Front-end"
        ? todasCategorias.filter(categoria => categoria !== "Prata" && categoria !== "Ouro")
        : todasCategorias;

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
            <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-8">
                Disciplina: {disciplina}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorias.map((categoria) => (
                    <Link
                        key={categoria}
                        href={`/blocos/${bloco}/${disciplina}/${categoria}`}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                {categoria}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
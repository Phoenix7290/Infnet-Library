"use client";

import Link from "next/link";

const blocos = ["Fundamentos", "Front-End"];

const getBlocoDescription = (bloco: string) => {
    switch (bloco) {
        case "Fundamentos":
            return "Conceitos básicos de programação web e JavaScript";
        case "Front-End":
            return "Desenvolvimento de interfaces modernas com React";
        default:
            return "";
    }
};

export default function BlocosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-blue-800 dark:text-blue-300 mb-4">
                    Trilha de Aprendizado
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                    Escolha um bloco para começar sua jornada de desenvolvimento
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blocos.map((bloco) => (
                        <Link key={bloco} href={`/blocos/${bloco}`}>
                            <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {bloco}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {getBlocoDescription(bloco)}
                                    </p>
                                    <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400">
                                        <span className="text-sm font-semibold">Explorar bloco</span>
                                        <svg
                                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
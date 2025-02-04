"use client";

import Link from "next/link";

const blocos = ["Fundamentos", "Front-End"];

export default function BlocosPage() {
    return (
        <div className="min-h-screen bg-blue-50 p-8">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Blocos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blocos.map((bloco) => (
                    <Link key={bloco} href={`/blocos/${bloco}`}>
                        <div className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                            <p className="text-xl font-semibold text-blue-800">{bloco}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
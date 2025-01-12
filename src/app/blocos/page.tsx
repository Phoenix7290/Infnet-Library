import Link from "next/link";

const blocos = ["Fundamentos", "Front-End"];

export default function BlocosPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Blocos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blocos.map((bloco) => (
                    <Link key={bloco} href={`/blocos/${bloco}`}>
                        <a className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                            <p className="text-xl font-semibold text-gray-800">{bloco}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
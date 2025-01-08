import Link from "next/link";

const blocos = ["fundamentos", "front-end"];

export default function BlocosPage() {
    return (
        <div>
            <h1>Blocos</h1>
            {blocos.map((bloco) => (
                <Link key={bloco} href={`/blocos/${bloco}`}>
                    <p>{bloco}</p>
                </Link>
            ))}
        </div>
    );
}

import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Não encontrado</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Volte para a Home</Link>
        </div>
    )
}

import { Card } from "@/components";
import { Footer, Header } from "@/layout";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Header Title="Infnet Library" />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                        Bem-vindo à Biblioteca Infnet
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore conteúdos educacionais de semestres passados nessa pequena biblioteca feita para revisar somente questões de semestres passados.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <Card
                        // title="Fundamentos de Software"
                        href="/blocos/Fundamentos"
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="p-6">
                            <div className="text-blue-600 dark:text-blue-400 mb-4">
                                {/* Ícone SVG para Fundamentos */}
                                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Fundamentos de Software
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Aprenda os conceitos básicos essenciais para programação
                            </p>
                        </div>
                    </Card>

                    <Card
                        // title="Front End"
                        href="/blocos/Front-End"
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="p-6">
                            <div className="text-blue-600 dark:text-blue-400 mb-4">
                                {/* Ícone SVG para Front End */}
                                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Front End
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Desenvolva interfaces modernas e responsivas
                            </p>
                        </div>
                    </Card>

                    <Card
                        // title="Blocos"
                        href="/blocos"
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="p-6">
                            <div className="text-blue-600 dark:text-blue-400 mb-4">
                                {/* Ícone SVG para Blocos */}
                                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Todos os Blocos
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Explore todos os blocos de conteúdo disponíveis
                            </p>
                        </div>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}
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

                {/* Feature Section */}
                {/* <div className="bg-blue-100 dark:bg-gray-700 rounded-2xl p-8 mb-12">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                            Por que estudar conosco?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="p-4">
                                <div className="text-blue-600 dark:text-blue-400 mb-3">
                                    <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Conteúdo Estruturado</h3>
                                <p className="text-gray-600 dark:text-gray-400">Material organizado em blocos para facilitar seu aprendizado</p>
                            </div>
                            <div className="p-4">
                                <div className="text-blue-600 dark:text-blue-400 mb-3">
                                    <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Exercícios Práticos</h3>
                                <p className="text-gray-600 dark:text-gray-400">Aprenda fazendo com nossos exercícios interativos</p>
                            </div>
                            <div className="p-4">
                                <div className="text-blue-600 dark:text-blue-400 mb-3">
                                    <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Aprendizado Rápido</h3>
                                <p className="text-gray-600 dark:text-gray-400">Conteúdo otimizado para aprendizado eficiente</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>

            <Footer />
        </div>
    );
}
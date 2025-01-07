"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const SideBarCourseItem = ({ courseItemTitle }: { courseItemTitle: string }) => {
    const [isCourseItemOpen, setIsCourseItemOpen] = useState(false);

    return (
        <li className="mb-2">
            <button
                className="w-full text-left py-2 px-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 flex items-center justify-between group"
                onClick={() => setIsCourseItemOpen(!isCourseItemOpen)}
            >
                <span className="text-gray-300 group-hover:text-white">
                    {courseItemTitle}
                </span>
                {isCourseItemOpen ? (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
            </button>
            {isCourseItemOpen && (
                <ul className="pl-4 mt-2 space-y-1 border-l border-gray-700">
                    {Array.from({ length: 16 }, (_, i) => (
                        <li
                            key={i}
                            className="py-1 px-4 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            Exercício {String(i + 1).padStart(2, "0")}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Botão para abrir no Mobile */}
            <button
                className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>

            {/* SideBar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-xl transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 w-64`}
            >
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-6">Lista de TPs e ATs</h2>
                    <ul className="space-y-2">

                        <SideBarCourseItem courseItemTitle="HTML e CSS" />

                        <SideBarCourseItem courseItemTitle="JavaScript 1" />

                        <SideBarCourseItem courseItemTitle="Interatividade Web" />

                        <SideBarCourseItem courseItemTitle="JavaScript 2" />
                    </ul>
                </div>
            </aside>

            {/* Overlay no Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default SideBar;
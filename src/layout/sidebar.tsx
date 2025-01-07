"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

interface SideBarCourseProps {
    courseTitle: string;
}

interface SideBarCourseItemProps {
    courseItemTitle: string;
}

export const SideBarCourseItem = ({ courseItemTitle }: SideBarCourseItemProps) => {
    const [isCourseItemOpen, setIsCourseItemOpen] = useState(false);

    return (
        <li className="mb-2">
            <button
                className="w-full text-left py-2 px-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 flex items-center justify-between group"
                onClick={() => setIsCourseItemOpen(!isCourseItemOpen)}
            >
                <span className="text-gray-300 group-hover:text-white">{courseItemTitle}</span>
                {isCourseItemOpen ?
                    <ChevronDown className="w-4 h-4 text-gray-400" /> :
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                }
            </button>
            {isCourseItemOpen && (
                <ul className="pl-4 mt-2 space-y-1 border-l border-gray-700">
                    {Array.from({ length: 16 }, (_, i) => (
                        <li key={i} className="py-1 px-4 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                            Exercise {String(i + 1).padStart(2, '0')}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export const SideBarCourse = ({ courseTitle }: SideBarCourseProps) => {
    const [isCourseOpen, setIsCourseOpen] = useState(false);

    return (
        <li className="mb-2">
            <button
                className="w-full text-left py-2 px-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 flex items-center justify-between group"
                onClick={() => setIsCourseOpen(!isCourseOpen)}
            >
                <span className="text-gray-300 group-hover:text-white">{courseTitle}</span>
                {isCourseOpen ?
                    <ChevronDown className="w-4 h-4 text-gray-400" /> :
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                }
            </button>
            {isCourseOpen && (
                <ul className="pl-4 mt-2 space-y-1 border-l border-gray-700">
                    <SideBarCourseItem courseItemTitle="TP1" />
                    <SideBarCourseItem courseItemTitle="TP2" />
                    <SideBarCourseItem courseItemTitle="TP3" />
                    <SideBarCourseItem courseItemTitle="AT" />
                </ul>
            )}
        </li>
    );
};

export default function Sidebar() {
    const [isFundamentosOpen, setIsFundamentosOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>

            {/* Sidebar */}
            <div className={`
                fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out
                ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}
                z-40 shadow-xl
            `}>
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-6 text-white">Lista dos TPs e ATs</h2>
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    className="w-full text-left py-2 px-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 flex items-center justify-between group"
                                    onClick={() => setIsFundamentosOpen(!isFundamentosOpen)}
                                >
                                    <span className="text-gray-300 group-hover:text-white">Fundamentos</span>
                                    {isFundamentosOpen ?
                                        <ChevronDown className="w-4 h-4 text-gray-400" /> :
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    }
                                </button>
                                {isFundamentosOpen && (
                                    <ul className="pl-4 mt-2 space-y-1 border-l border-gray-700">
                                        <SideBarCourse courseTitle="JavaScript 1" />
                                        <SideBarCourse courseTitle="JavaScript 2" />
                                        <SideBarCourse courseTitle="HTML e CSS" />
                                        <SideBarCourse courseTitle="Interatividade Web" />
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
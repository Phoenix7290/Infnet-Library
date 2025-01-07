"use client"
import React, { useState } from 'react';

export default function Sidebar() {
    const [isFundamentosOpen, setIsFundamentosOpen] = useState(false);

    return (
        <div className="w-64 h-full bg-gray-800 text-white fixed left-0 top-0 p-4">
            <h2 className="text-xl font-bold mb-4">Lista dos TPs e ATs</h2>
            <ul>
                <li>
                    <button
                        className="w-full text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded mb-2"
                        onClick={() => setIsFundamentosOpen(!isFundamentosOpen)}
                    >
                        Fundamentos {isFundamentosOpen ? '▲' : '▼'}
                    </button>
                    {isFundamentosOpen && (
                        <ul className="pl-4">
                            <li className="mb-2">
                                JavaScript 1:
                                <ul className="pl-4">
                                    <li className="py-1">TP1</li>
                                    <li className="py-1">TP2</li>
                                    <li className="py-1">TP3</li>
                                    <li className="py-1">AT</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                JavaScript 2:
                                <ul className="pl-4">
                                    <li className="py-1">TP1</li>
                                    <li className="py-1">TP2</li>
                                    <li className="py-1">TP3</li>
                                    <li className="py-1">AT</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                HTML:
                                <ul className="pl-4">
                                    <li className="py-1">TP1</li>
                                    <li className="py-1">TP2</li>
                                    <li className="py-1">TP3</li>
                                    <li className="py-1">AT</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                Interatividade:
                                <ul className="pl-4">
                                    <li className="py-1">TP1</li>
                                    <li className="py-1">TP2</li>
                                    <li className="py-1">TP3</li>
                                    <li className="py-1">AT</li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
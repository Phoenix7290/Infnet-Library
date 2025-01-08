"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import '@/styles/components/sidebar.scss';

interface SideBarCourseProps {
    courseTitle: string;
}

interface SideBarCourseItemProps {
    courseItemTitle: string;
}

export const SideBarCourseItem = ({ courseItemTitle }: SideBarCourseItemProps) => {
    const [isCourseItemOpen, setIsCourseItemOpen] = useState(false);

    return (
        <li className="sidebar-course-item">
            <button
                className="sidebar-course-item-button"
                onClick={() => setIsCourseItemOpen(!isCourseItemOpen)}
            >
                <span className="sidebar-course-item-title">{courseItemTitle}</span>
                {isCourseItemOpen ?
                    <ChevronDown className="icon" /> :
                    <ChevronRight className="icon" />
                }
            </button>
            {isCourseItemOpen && (
                <ul className="sidebar-course-item-list">
                    {Array.from({ length: 16 }, (_, i) => (
                        <li key={i} className="sidebar-course-item-exercise">
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
        <li className="sidebar-course">
            <button
                className="sidebar-course-button"
                onClick={() => setIsCourseOpen(!isCourseOpen)}
            >
                <span className="sidebar-course-title">{courseTitle}</span>
                {isCourseOpen ?
                    <ChevronDown className="icon" /> :
                    <ChevronRight className="icon" />
                }
            </button>
            {isCourseOpen && (
                <ul className="sidebar-course-list">
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
                className="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="sidebar-content">
                    <h2 className="sidebar-title">Lista dos TPs e ATs</h2>
                    <nav>
                        <ul className="sidebar-nav">
                            <li>
                                <button
                                    className="sidebar-fundamentos-button"
                                    onClick={() => setIsFundamentosOpen(!isFundamentosOpen)}
                                >
                                    <span className="sidebar-fundamentos-title">Fundamentos</span>
                                    {isFundamentosOpen ?
                                        <ChevronDown className="icon" /> :
                                        <ChevronRight className="icon" />
                                    }
                                </button>
                                {isFundamentosOpen && (
                                    <ul className="sidebar-fundamentos-list">
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
                    className="sidebar-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
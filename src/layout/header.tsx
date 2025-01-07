"use client"

import React, { useState } from 'react';
import Link from "next/link";
import { Menu, X, BookOpen, Home, Layers } from 'lucide-react';
import "@/styles/components/header.scss"

interface HeaderProps {
    Title: string;
}

const Header = ({ Title }: HeaderProps) => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    const menuItems = [
        { title: 'Home', icon: <Home size={18} />, href: '/' },
        { title: 'Cursos', icon: <BookOpen size={18} />, href: '/courses' },
        { title: 'Materiais', icon: <Layers size={18} />, href: '/materials' },
    ];

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    {/* Logo and Title Section */}
                    <div className="logo-section">
                        <div className="flex-shrink-0">
                            <BookOpen className="h-8 w-8" />
                        </div>
                        <h1 className="title">{Title}</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        {menuItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="nav-link"
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-btn md:hidden">
                        <button
                            onClick={() => setMenuIsActive(!menuIsActive)}
                            className="p-2 rounded-md hover:bg-blue-500/20 transition-colors"
                        >
                            {menuIsActive ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {menuIsActive && (
                    <div className="mobile-nav">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="mobile-nav-link"
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
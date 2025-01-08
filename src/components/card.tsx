import React from 'react';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

interface CardProps {
    title: string;
    href: string;
}

const Card: React.FC<CardProps> = ({ title, href }) => {
    return (
        <Link href={href} className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                <IoArrowForward className="text-gray-800" />
            </div>
        </Link>
    );
};

export default Card;
import React from 'react';

interface CardProps {
    title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            </div>
        </div>
    );
};

export default Card;
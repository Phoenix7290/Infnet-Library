
import React from 'react';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
    </div>
);

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
    );
}

import React from "react";

const LoaderComponent = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center bg-black/70 fixed inset-0 z-[60]">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-red-500 border-t-transparent"></div>
            <p className="text-gray-200 text-xl font-medium mt-4">Loading...</p>
        </div>
    );
};

export default LoaderComponent;

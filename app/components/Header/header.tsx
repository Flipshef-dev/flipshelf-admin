'use client';
import React from "react";
import { Search } from 'lucide-react';

type HeaderProps = {
    title: String
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header
            className="bg-neutral-50 dark:bg-neutral-900  border-0 text-black dark:text-white px-6 py-4"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold ">{title}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 bg-neutral-200 dark:bg-neutral-600 "
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
"use client";
import Link from 'next/link';
import React from 'react';
 import { useTheme } from 'next-themes'; 
    import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
  }, []);

  return (
  <nav className='bg-gray-800 text-white p-4 sm:p-6 md:justify-between md:items-center' suppressHydrationWarning>  
    <div className = "container mx-auto flex justify-between items-center">
    <a href=""className='text-xl font-bold cursor-pointer'> Dashboard </a>
    <input type="text" placeholder="Search here" className='w-64 pl-10 pr-4 py-2  bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[44px] ' />
  
    <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="p-2 rounded bg-gray-200 dark:bg-gray-700 cursor-pointer"
      >
        {theme === 'dark' ? <FaSun/> : <FaMoon/>}
      </button>

    </div>
    </nav>
  );
 };

 export default Navbar;
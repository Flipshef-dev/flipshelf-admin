"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

 export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);  
  return (
  <nav className='bg-gray-800 text-white p-4 sm:p-6 md:justify-between md:items-center'>  
    <div className = "container mx-auto flex justify-between items-center">
    <a href=""className='text-xl font-bold cursor-pointer'> <FontAwesomeIcon icon={faHouse} /> </a>

    <div className='hidden md:flex'>
      <Link href="/" className='mx-2 hover:text-gray-400'> Home </Link>
      <Link href="/about" className='mx-2 hover:text-gray-400'> About </Link>
      <Link href="/contact" className='mx-2 hover:text-gray-400'> Contact </Link> 
    </div>

<div className='md:hidden flex items-center'>
  <button onClick={() =>{
    setIsOpen(!isOpen);
    }}>
  </button>
</div>



    </div>
    </nav>
  );
 };

export default Navbar;

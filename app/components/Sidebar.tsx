'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBookmark , FaHeart, FaBars , FaRegQuestionCircle } from  'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>

      <div className="md:hidden p-4 bg-gray-900 text-white">
        <button onClick={toggleSidebar}>
          <FaBars size={20} />
        </button>
      </div>

      <div className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-6 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* <h2 className="text-2xl font-bold mb-8">📚 eBookStore</h2> */}
        <ul className="space-y-4">
          <li>
            <Link href="/home" className="flex items-center hover:bg-gray-700 p-2 rounded">
              <FaHouse className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="/bookmarks" className="flex items-center hover:bg-gray-700 p-2 rounded">
              <FaBookmark className="mr-2" /> Bookmarks
            </Link>
          </li>
          <li>
            <Link href="/discover" className="flex items-center hover:bg-gray-700 p-2 rounded">
              <FaHeart className="mr-2" /> Discover
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center hover:bg-gray-700 p-2 rounded">
              <IoSettings className="mr-2" /> Settings
            </Link>
          </li>
          <li>
            <Link href="/help" className="flex items-center hover:bg-gray-700 p-2 rounded">
              <FaRegQuestionCircle className="mr-2" /> Help
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

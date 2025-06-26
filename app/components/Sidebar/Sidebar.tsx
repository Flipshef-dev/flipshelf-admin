'use client';
import React from 'react';
import {
  LayoutDashboard,
  Settings,
  BookOpen,
  Server,
  PanelLeftOpen,
  PanelLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: BookOpen, label: 'Books', active: false },
    { icon: Server, label: 'Api', active: false },
  ];

  return (
    <div
      className={`
        ${isCollapsed ? 'w-25' : 'w-64'}
        h-full-
        min-h-screen bg-neutral-50 dark:bg-neutral-800 text-black dark:text-white
        p-6 transition-all shadow-md
      `}
    >
      {/* Logo */}
      <div className="mb-8 relative">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
          {/* Logo Icon */}
          <div className=" flex items-center justify-center flex-shrink-0">
            <BookOpen size={22} className="text-neutral-950 dark:text-neutral-50" />
          </div>
          
          {/* Logo Text */}
          {!isCollapsed && (
            <h1 className="text-xl font-bold whitespace-nowrap">
              Flip Shelf
            </h1>
          )}
        </div>

        {/* Collapse Button */}
        <Button
          variant="ghost"
          size="default"
          onClick={toggleSidebar}
          className={`
            text-neutral-900 dark:text-neutral-50
            hover:text-neutral-900 dark:hover:text-neutral-50
            hover:bg-neutral-200 dark:hover:bg-neutral-700
            transition-all duration-200 p-2 h-8 w-8
            ${isCollapsed 
              ? 'absolute -right-6 top-0 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-b-md shadow-lg z-10' 
              : 'absolute top-0 right-0'
            }
          `}
        >
          {isCollapsed ? (
            <PanelLeftOpen size={16} />
          ) : (
            <PanelLeft size={16} />
          )}
        </Button>
      </div>

      {/* Navbar */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          // Add hrefs for navigation, e.g., '/dashboard', '/books', '/api'
          const hrefs = ['/dashboard', '/books', '/api .'];
          return (
            <Link href={hrefs[index]} key={index} 
                className={`
                  flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} 
                  px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 
                  ${isCollapsed ? 'gap-0' : 'gap-1.5'}
                  ${item.active
                    ? 'bg-neutral-700 text-white shadow-lg'
                    : 'text-neutral-800 hover:bg-neutral-200 hover:bg-opacity-50 dark:text-neutral-50 dark:hover:bg-neutral-600'
                  }
                `}
                title={isCollapsed ? item.label : ''}
              >
                <IconComponent size={20} />
                {!isCollapsed && (
                  <span className="font-medium transition-opacity duration-200">
                    {item.label}
                  </span>
                )}
            </Link>
          );
        })}
        <hr className="bg-neutral-950  w-full h-0.5 dark:bg-neutral-50 my-2" />
        <div
          className={`
            flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} 
            px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 
            ${isCollapsed ? 'gap-0' : 'gap-1.5'} 
            text-neutral-800 hover:bg-neutral-200 hover:bg-opacity-50 dark:text-neutral-50 dark:hover:bg-neutral-600
          `}
          title={isCollapsed ? 'Settings' : ''}
        >
          <Settings size={20} />
          {!isCollapsed && (
            <span className="font-medium transition-opacity duration-200">
              Settings
            </span>
          )}
        </div>
      </nav>
    </div>

  );
};

export default Sidebar;

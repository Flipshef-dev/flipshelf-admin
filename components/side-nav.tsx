'use client';

import { Fragment, useEffect, useState } from 'react';

import Link from 'next/link';

import { NavItems } from '@/config';
import { cn } from '@/lib/utils';
import {
  PanelLeftOpen,
  PanelLeft,
  BookOpen,
} from 'lucide-react';

import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export default function SideNav() {
  const navItems = NavItems();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sidebarExpanded');
      if (saved === null) {
        return true;
      }
      return JSON.parse(saved);
    }
    return true; // default state if window is not defined
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(
        'sidebarExpanded',
        JSON.stringify(isSidebarExpanded),
      );
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div >
      <div
        className={cn(
          isSidebarExpanded ? 'w-[200px]' : 'w-[68px]',
          'border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-screen bg-accent',
        )}
      >
        <aside className="flex h-screen flex-col w-full break-words px-4 overflow-x-hidden columns-1">
          {/* Top */}
          {/* Logo Icon */}
          <div className="mt-4 relative">
            <div className={`flex ml-2 mb-4 items-center justify-start ${!isSidebarExpanded ? 'justify-center' : 'gap-3'}`}>
              <div className=" flex items-center justify-center flex-shrink-0">
                <BookOpen size={22} className="text-neutral-950 dark:text-neutral-50" />
              </div>

              {/* Logo Text */}
              {isSidebarExpanded && (
                <h1 className="text-xl font-bold whitespace-nowrap">
                  Flip Shelf
                </h1>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                if (item.position === 'top') {
                  return (
                    <Fragment key={idx}>
                      <div className="space-y-1">
                        <SideNavItem
                          label={item.name}
                          icon={item.icon}
                          path={item.href}
                          active={item.active}
                          isSidebarExpanded={isSidebarExpanded}
                        />
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
          {/* Bottom */}
          <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
            <ThemeToggle isDropDown={true} />
            {navItems.map((item, idx) => {
              if (item.position === 'bottom') {
                return (
                  <Fragment key={idx}>
                    <div className="space-y-1">
                      <SideNavItem
                        label={item.name}
                        icon={item.icon}
                        path={item.href}
                        active={item.active}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </aside>
        <div className="mt-[calc(calc(90vh)-40px)] relative">
          <Button
            className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center rounded-full shadow-md bg-neutral-300 text-neutral-950 dark:text-neutral-50 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-neutral-50 "
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <PanelLeft size={16} />
            ) : (
              <PanelLeftOpen size={16} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem: React.FC<{
  label: string;
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={`h-full relative flex items-center whitespace-nowrap rounded-md ${active
            ? 'font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
            : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
            }`}
        >
          <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
            {icon}
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <Link
          href={path}
          className={`h-full relative flex items-center whitespace-nowrap rounded-md ${active
            ? 'font-base text-sm bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white'
            : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
            }`}
        >
          <div className="font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100">
            {icon}
          </div>
        </Link>
      )}
    </>
  );
};

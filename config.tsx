import { usePathname } from 'next/navigation';

import {
  LayoutDashboard,
  Settings,
  BookOpen,
  Server,
  PanelLeftOpen,
  PanelLeft,
} from 'lucide-react';
export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Dashboard',
      href: '/',
      icon: <LayoutDashboard size={22} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Books',
      href: '/books',
      icon: <BookOpen size={22} />,
      active: isNavItemActive(pathname, '/profile'),
      position: 'top',
    },
    {
      name: 'Api',
      href: '/api',
      icon: <Server size={22} />,
      active: isNavItemActive(pathname, '/notifications'),
      position: 'top',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <Settings size={22} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};

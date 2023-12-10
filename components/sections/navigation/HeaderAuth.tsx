'use client';

import { Disclosure } from '@headlessui/react';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import { HiMenu } from 'react-icons/hi';
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6';
import { FaBell } from 'react-icons/fa';
import Logo from '@/components/overall/Logo';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import UserDropdown from '@/components/overall/User';

import { UserType } from '@/types/session';

const navigation = [
  { name: 'Stages', href: '/internships', current: false },
  { name: 'Applications', href: '/applications', current: false },
  { name: 'Tableau de Bord', href: '/dashboard', current: false },
  { name: 'Interviews', href: '/interview', current: false }
];

export default function Header(user: UserType) {
  const pathname = usePathname();
  const userNavigation = [
    { name: 'Mon Profile', href: '/profile/' + user.id, onClick: () => {} },
    { name: 'Parametre', href: '/profile', onClick: () => {} },
    { name: 'Se Déconnecter', href: '/', onClick: () => signOut() }
  ];
  
  navigation.map((item) => {
    if (item.href === pathname) {
      item.current = true;
    } else {
      item.current = false;
    }
  });

  return (
    <>
      <div className="min-h-full">
        <div className="bg-blue-600 pb-32">
          <Disclosure
            as="nav"
            className="border-b border-blue-300 border-opacity-25 bg-blue-600 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-blue-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <div className="flex-shrink-0">
                        <Link href="/applications" aria-label="Home">
                          <Logo className="h-8 w-8" isLogo={false} />
                        </Link>
                      </div>
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={cn(
                                item.current
                                  ? 'bg-blue-700 text-white'
                                  : 'text-white hover:bg-blue-500 hover:bg-opacity-75',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                      <div className="w-full max-w-lg lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Recherche
                        </label>
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaMagnifyingGlass
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <Input
                            id="search"
                            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:text-sm sm:leading-6"
                            placeholder="Rercherche..."
                            type="search"
                            name="search"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <FaXmark
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <HiMenu
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                      <div className="flex items-center">
                        <Button
                          type="button"
                          className="flex-shrink-0 rounded-full bg-blue-600 p-1 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                        >
                          <span className="sr-only">View notifications</span>
                          <FaBell className="h-6 w-6" aria-hidden="true" />
                        </Button>

                        <div className="relative ml-3 flex-shrink-0">
                          <UserDropdown {...user} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className={cn(
                          item.current
                            ? 'bg-blue-700 text-white'
                            : 'text-white hover:bg-blue-500 hover:bg-opacity-75',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-blue-500 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-10 w-10 rounded-full"
                          height={150}
                          width={150}
                          src={user.image || 'https://via.placeholder.com/150'}
                          alt={user.name || 'User'}
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {user.name || 'User'}
                        </div>
                        <div className="text-sm font-medium text-blue-300">
                          {user.email || 'email@example.com'}
                        </div>
                      </div>
                      <Button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-blue-600 p-1 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                      >
                        <span className="sr-only">View notifications</span>
                        <FaBell className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as={Link}
                          href={item.href}
                          onClick={item.onClick}
                          className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500 hover:bg-opacity-75"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {navigation.map((item) => (
                  <span key={item.name}>{item.current ? item.name : ''}</span>
                ))}
              </h1>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

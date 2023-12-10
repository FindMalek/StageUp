'use client';

import { FaChevronDown } from 'react-icons/fa';
import { IoFunnel } from 'react-icons/io5';

import { cn } from '@/lib/utils';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/Sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';

const sortOptions = [
  { name: 'Plus Recommandé', href: '#', current: true },
  { name: 'Moins Recommandé', href: '#', current: false },
  { name: 'Plus Récent', href: '#', current: false },
  { name: 'Plus Ancien', href: '#', current: false }
];

export default function MobileFilter(filters: any) {
  filters = Object.values(filters);
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger className="group -mt-6 inline-flex justify-center pl-6 text-sm font-medium text-gray-700 hover:text-gray-900">
            Trier
            <FaChevronDown
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {sortOptions.map((option) => (
              <DropdownMenuItem key={option.name}>
                <a
                  href={option.href}
                  className={cn(
                    option.current
                      ? 'font-medium text-gray-900'
                      : 'text-gray-500'
                  )}
                >
                  {option.name}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="-m-2 ml-4 p-2  text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <IoFunnel className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="py-4 text-left">
              <SheetTitle>Filtres</SheetTitle>
              <SheetDescription>
                Choisissez les filtres que vous souhaitez appliquer.
              </SheetDescription>
            </SheetHeader>
            {filters.map((section: any) => (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem key={section.id} value={section.id}>
                  <AccordionTrigger>{section.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {section.options.map((option: any, optionIdx: any) => (
                        <div key={option.value} className="flex items-center">
                          <Checkbox
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Appliquer les filtres</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

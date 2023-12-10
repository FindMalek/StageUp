import { domains, locations, positions } from '@/data/internships';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion';
import { Checkbox } from '@/components/ui/Checkbox';
import Container from '@/components/ui/Container';

import MobileFilter from '@/components/sections/internships/MobileFilter';
import { StarRating } from '@/components/ui/StarRating';

export default function InternshipsFilter({
  children
}: {
  children: React.ReactNode;
}) {
  const filters = [domains, locations, positions];

  return (
    <div className="rounded-lg bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MobileFilter {...filters} />

          <section aria-labelledby="internships-heading" className="pb-24 pt-6">
            <h2 id="internships-heading" className="sr-only">
              internships
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <h3 className="pb-8 text-lg font-medium text-gray-900">
                  Filtres généraux
                </h3>

                {filters.map((section) => (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem key={section.id} value={section.id}>
                      <AccordionTrigger>{section.name}</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
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

                <StarRating totalStars={5} />
              </form>

              <Container>
                {children}
              </Container>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

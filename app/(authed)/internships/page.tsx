import { Internship } from '@prisma/client';

import { getUrl } from '@/lib/utils';

import Container from '@/components/ui/Container';
import InternshipCard from '@/components/sections/internships/Internship';
import InternshipsFilter from '@/components/sections/internships/InternshipFilter';

async function getInternships() {
  const url = getUrl();
  const response = await fetch(`${url}/api/internship`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data.internships;
}

export default async function Internships() {
  const internships = (await getInternships()) as Internship[];

  return (
    <>
      <InternshipsFilter>
        <Container>
          {internships.map((internship) => (
            <>
              {/* @ts-ignore: Type error between Internship Prisma and my types.d.ts */}
              <InternshipCard key={internship.id} internship={internship} />
            </>
          ))}
        </Container>
      </InternshipsFilter>
    </>
  );
}

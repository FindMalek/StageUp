import { InternshipType } from '@/types/internship';

import { getUrl } from '@/lib/utils';

import Container from '@/components/ui/Container';
import InternshipCard from '@/components/sections/internships/InternshipCard';
import InternshipsFilter from '@/components/sections/internships/InternshipFilter';

async function getInternships() {
  const url = getUrl();
  const response = await fetch(`${url}/api/internship?getType=GETALL&cacheBuster=${new Date().getTime()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data.internships;
}

export default async function Internships() {
  const internships = (await getInternships()) as InternshipType[];

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

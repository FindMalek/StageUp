import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

import Container from '@/components/ui/Container';
import Internship from '@/components/sections/internships/Internship';
import InternshipsFilter from '@/components/sections/internships/InternshipFilter';

import { InternshipType } from '@/types/internship';
import { internships } from '@/data/internships';

export default async function Internships() {
  //const session = (await getServerSession(authOptions)) as any;

  return (
    <>
      <InternshipsFilter>
        <Container>
          {internships.map((internship) => (
            <Internship key={internship.id} internship={internship} />
          ))}
        </Container>
      </InternshipsFilter>
    </>
  );
}

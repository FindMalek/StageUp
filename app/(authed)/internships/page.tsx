import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

import Container from '@/components/ui/Container';
import InternshipsFilter from '@/components/sections/internships/InternshipFilter';

export default async function Internships() {
  const session = (await getServerSession(authOptions)) as any;

  return (
    <>
      <InternshipsFilter>
        <Container className="sm:max-w-sm sm:px-80 lg:max-w-lg lg:px-0">
          {JSON.stringify(session, null, 2)}
        </Container>
      </InternshipsFilter>
    </>
  );
}

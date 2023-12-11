import { getUrl } from '@/lib/utils';
import { InternshipType } from '@/types/internship';

import InternshipOverview from '@/components/sections/internships/InternshipOverview';

async function getInternship(internshipId: string) {
  const url = getUrl();
  const response = await fetch(
    `${url}/api/internship?getType=GETONE?internshipId=${internshipId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data.internship;
}

export default async function InternshipPage({
  params: { internshipId }
}: {
  params: {
    internshipId: string;
  };
}) {
  const internship = (await getInternship(internshipId)) as InternshipType;
  return (
    <>
      <InternshipOverview {...internship} />
    </>
  );
}

import { getUrl } from '@/lib/utils';
import { InternshipType } from '@/types/internship';

import InternshipOverview from '@/components/sections/internships/InternshipOverview';

async function getInternship(internshipId: string) {
  const url = getUrl();
  try {
    const response = await fetch(
      `${url}/api/internship?getType=GETONE&internshipId=${internshipId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.log(response);
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.internship;
  } catch (error: any) {
    console.error('Fetch error: ', error.message);
    return null;
  }
}

export default async function InternshipPage({ params }: any) {
  const internship = (await getInternship(
    params.internshipId
  )) as InternshipType;
  return (
    <>
      <InternshipOverview internship={internship} />
    </>
  );
}

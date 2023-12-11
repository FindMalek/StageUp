import { Internship } from '@prisma/client';

import { DataTable } from '@/components/sections/application/enterprise/DataTable';
import { columns } from '@/components/sections/application/enterprise/Columns';

import { getUrl } from '@/lib/utils';

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

export default async function Applications() {
  const internships = (await getInternships()) as Internship[];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={internships} />
    </div>
  );
}

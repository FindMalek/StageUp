import { DataTable } from '@/components/sections/application/enterprise/DataTable';
import { columns } from '@/components/sections/application/enterprise/Columns';
import { Internship } from '@prisma/client';
import { getUrl } from '@/lib/utils';

export default async function Applications() {
  const internshipsFetched = (await fetch(`${getUrl()}/api/internship`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => data.internships)) as Internship[];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={internshipsFetched} />
    </div>
  );
}

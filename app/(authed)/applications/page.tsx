import { DataTable } from '@/components/sections/application/enterprise/DataTable';
import { columns } from '@/components/sections/application/enterprise/Columns';

import { internships } from '@/data/internships';

export default function Applications() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={internships} />
    </div>
  );
}

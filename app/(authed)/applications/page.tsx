import { getServerSession } from 'next-auth';
import { Internship } from '@prisma/client';

import { getUrl } from '@/lib/utils';
import { authOptions } from '@/lib/auth';

import { DataTable } from '@/components/sections/application/enterprise/DataTable';
import AccessDenied from '@/components/sections/display/AccessDenied';
import { columns } from '@/components/sections/application/enterprise/Columns';

async function getInternships(userId: string) {
  const url = getUrl();
  const response = await fetch(`${url}/api/internship?getType=GETBYENTERPRISE&userId=${userId}&cacheBuster=${new Date().getTime()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }
  });

  if (!response.ok) {
    return (
      <AccessDenied
        statusCode={response.status}
        title="Une erreur est survenue"
        description={response.statusText}
        button="Retourner à l'accueil"
        link="/"
      />
    );
  }

  const data = await response.json();
  return data.internships;
}

export default async function Applications() {
  const user = ((await getServerSession(authOptions)) as any).user;
  const internships = (await getInternships(user.id)) as Internship[];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={internships} />
    </div>
  );
}

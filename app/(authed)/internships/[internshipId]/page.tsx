export default async function Internship({
  params: { internshipId },
}: {
  params: {
    internshipId: string;
  };
}) {
  return <>{internshipId}</>;
}

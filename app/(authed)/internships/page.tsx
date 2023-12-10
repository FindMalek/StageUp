import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Internships() {
	const session = (await getServerSession(authOptions)) as any;

	return <>{JSON.stringify(session, null, 2)}</>;
}

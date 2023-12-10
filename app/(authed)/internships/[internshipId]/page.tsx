import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Internship() {
    const session = (await getServerSession(authOptions)) as any;
    
    return (
        <>details : https://excalidraw.com/</>
    )
}
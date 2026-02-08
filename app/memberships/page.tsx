import { getMemberships } from "@/utils/fetchs/memberships";
import { Membership } from "@/utils/schemas/memberships";
import Link from "next/link";
import ButtonRefresh from "@/components/buttonRefresh";

export default async function Home() {
  const memberships = await getMemberships()
  return (
    <div className="flex justify-center items-center bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <main className="flex flex-col justify-between items-center sm:items-start bg-white dark:bg-black px-16 py-32 w-full max-w-3xl min-h-screen">
        {memberships.map((membership: Membership) => (
          <Link key={membership.id} href={`/memberships/${membership.id}`}>{membership.name}</Link>
        ))}
        <ButtonRefresh path="/memberships" />
      </main>
    </div>
  );
}
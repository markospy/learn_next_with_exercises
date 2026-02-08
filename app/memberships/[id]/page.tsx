import ButtonRefresh from "@/components/buttonRefresh"
import { getMemberships, getMembershipsById } from "@/utils/fetchs/memberships"
import { Membership } from "@/utils/schemas/memberships"

export const revalidate = 3600 // 1 hour

export async function generateStaticParams() {
  const memberships = await getMemberships()
  return memberships.map((membership: Membership) => ({
    id: membership.id
  }))
}

export default async function MembershipsPage({ params }: { params: { id: string } }) {
  const { id } = await params
  console.log(id)
  const membership = await getMembershipsById(id)
  return <div className="flex flex-col justify-center items-center bg-zinc-50 dark:bg-black min-h-screen font-sans">
        <h1>{membership.name}</h1>
        <ButtonRefresh path={`/memberships/${id}`} />
    </div>
}
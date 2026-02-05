import { Suspense } from "react"
import { getClientByName } from "../../utils/api/clients/get"
import ClientName from "@/components/clients/clientName"
import Loading from "./loading"


export default async function Clients({ params }: { params: Promise<{ name: string }> }) {
    const { name } = await params
    const clientsPromise = getClientByName(name)

    return <div className="p-4">
        {
            <Suspense fallback={<Loading />}>
                <ClientName clientPromise={clientsPromise}/>
            </Suspense>
        }
    </div>
}
import { Suspense } from "react"
import Loading from "./loading"
import ClientsList from "../../components/clients/ClientList"
import { getClients } from "../utils/api/clients/get"


export default async function Clients() {
    const clientsPromise = getClients()

    return <div className="flex flex-col justify-center items-center gap-4 p-4">
        <Suspense fallback={<Loading />}>
            <ClientsList clients={clientsPromise}/>
        </Suspense>
    </div>
}
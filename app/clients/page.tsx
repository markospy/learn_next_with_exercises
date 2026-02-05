import { Suspense } from "react"
import Loading from "./loading"
import ClientsList from "../../components/clients/ClientList"
import SearchBar from "../../components/clients/searchBar"
import { getClients } from "../utils/api/clients/get"


export default async function Clients() {
    const clientsPromise = getClients()

    return <div className="p-4">
        <SearchBar />
        {
            <Suspense fallback={<Loading />}>
                <ClientsList clients={clientsPromise}/>
            </Suspense>
        }
    </div>
}
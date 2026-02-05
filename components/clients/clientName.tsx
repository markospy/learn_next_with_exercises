'use client'

import { use } from "react"



export default function Client({clientPromise} : {clientPromise: Promise<any>}) {
    const client = use(clientPromise)

    if (client.clients.length === 0) {
        return <div>No se encontró el cliente</div>
    }

    const first = client.clients[0]
    return (
        <>
            <h1>Cliente encontrado</h1>
            <p>{first.id_zkteco}</p> <strong> ➡️ </strong> <p>{first.name}</p>
        </>
    )
}
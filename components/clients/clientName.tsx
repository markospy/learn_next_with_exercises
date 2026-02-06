'use client'

import { use } from "react"



export default function Client({clientPromise} : {clientPromise: Promise<any>}) {
    const client = use(clientPromise)

    if (client.length === 0) {
        return <div>No se encontró el cliente</div>
    }

    const first = client[0]
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-2xl">Cliente encontrado</h1>
            <div className="flex justify-center items-center gap-2">
                <p className="text-lg">Id</p>
                <strong> ➡️ </strong>
                <p className="text-lg">Nombre</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <p className="text-lg">{first.id_zkteco}</p>
                <strong> ➡️ </strong>
                <p className="text-lg">{first.name}</p>
            </div>
        </div>
    )
}
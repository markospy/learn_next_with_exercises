'use client'

import { use } from "react"
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function ClientsList({ clients }: { clients: Promise<any> }) {
    let clientsData = use(clients)

    if (clientsData.clients.length === 0) {
        return <div>No se encontraron clientes</div>
    }

    return (
    <>
        <Table>
            <TableCaption>Lista de clientes</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID ZKteco</TableHead>
                    <TableHead>Nombre</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {clientsData.clients.map((client: any) => (
                <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.id_zkteco}</TableCell>
                    <TableCell>{client.name}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </>)
}
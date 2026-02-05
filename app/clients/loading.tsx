import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

const SKELETON_ROWS = 6

export default function Loading() {
    return (
        <Table>
            <TableCaption>Lista de clientes</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID ZKteco</TableHead>
                    <TableHead>Nombre</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.from({ length: SKELETON_ROWS }).map((_, i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">
                            <div className="h-5 w-20 rounded bg-muted animate-pulse" />
                        </TableCell>
                        <TableCell>
                            <div className="h-5 w-32 rounded bg-muted animate-pulse" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { handleSearch } from "@/app/actions/clients/handleSearch"

export default function SearchBar() {
    return (
        <form action={handleSearch} className="flex justify-center gap-2 mb-4 max-w-72">
            <Input type="text" placeholder="Buscar cliente" name="search" />
            <Button type="submit">Buscar</Button>
        </form>
    )
}
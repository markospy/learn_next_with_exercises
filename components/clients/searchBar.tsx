"use client"

import { redirect } from "next/navigation"

export default function SearchBar() {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            const search = e.target.value
            if (search?.trim()) {
                redirect(`/clients/${encodeURIComponent(search.trim())}`)
            } else {
                redirect('/clients')
            }
        }, 500)
    }

    return <input
        type="text"
        placeholder="Buscar cliente"
        onChange={handleSearch}
        className="p-2 border-2 border-gray-300 rounded-md"
    />
}
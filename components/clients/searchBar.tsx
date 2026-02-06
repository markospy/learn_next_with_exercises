"use client"

import { useRouter } from "next/navigation"

export default function SearchBar() {
    const router = useRouter()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            const search = e.target.value
            if (search?.trim()) {
                router.push(`/clients/${encodeURIComponent(search.trim())}`)
            } else {
                router.push('/clients')
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
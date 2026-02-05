"use server"
import { redirect } from "next/navigation"

export const handleSearch = async (formData: FormData) => {
    const search = formData.get('search') as string
    redirect(`/clients/${encodeURIComponent(search.trim())}`)
}
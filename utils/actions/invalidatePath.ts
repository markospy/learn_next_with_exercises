'use server'

import { revalidatePath } from "next/cache"

export async function invalidatePathAction(path: string) {
    revalidatePath(path)
}
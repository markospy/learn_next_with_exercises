'use client'

import { invalidatePathAction } from "@/utils/actions/invalidatePath"

export default function ButtonRefresh({path}: {path: string}) {
    return <form action={() => {
      invalidatePathAction(path)
    }}>
        <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:cursor-pointer" type="submit">
          Refresh
        </button>
    </form>
}
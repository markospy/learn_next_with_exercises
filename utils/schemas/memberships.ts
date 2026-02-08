export interface Membership {
        id: string
        name: string
        description: string
        duration_days: number
        price: number
        is_active: boolean
        is_fixed: boolean
        init_date: string | null
        created_at: string
        updated_at: string
}
import { notFound } from 'next/navigation'
import { API_URL, token } from "./share"

export async function getMemberships() {
  let headers = new Headers()
  headers.append('accept', 'application/json')
  headers.append('Authorization', token)

  const response = await fetch(`${API_URL}memberships`, {
    headers: headers
  })

  if (!response.ok) {
    throw new Error('Failed to fetch memberships')
  }

  return response.json()
}

export async function getMembershipsById(id: string) {
  let headers = new Headers()
  headers.append('accept', 'application/json')
  headers.append('Authorization', token)

  const response = await fetch(`${API_URL}memberships/${id}`, {
    headers: headers
  })

  if (response.status === 404) {
    notFound()
  }

  if (!response.ok) {
    throw new Error('Failed to fetch membership by id')
  }

  return response.json()
}
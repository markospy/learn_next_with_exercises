const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ7XCJpZF91c2VyXCI6IFwiNzY4NTRlYTYtMmZmZS00MzhkLWFlNjgtNjFiZDRlMjY1MjljXCIsIFwiaWRfZ3ltXCI6IFwiYWNjOTE3YzQtMWE3NC00YjExLTk0YzItZTA1ZGYxMDY1MzcwXCIsIFwidXNlcm5hbWVcIjogXCJhZHJpYW5hMVwifSIsInNjb3BlcyI6WyJneW1fc3VwZXJfYWRtaW4iXSwiZXhwIjoxNzcwNzY5ODA5fQ.juevsYN1WA5OYkt7e2MMZgB8_BNNcPcEFl9_zo_DYxQ';

const API_URL = 'http://127.0.0.1:8000/v1/'

export const getClients = async () => {
    let headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('Authorization', token)

    const clients = await fetch(`${API_URL}clients/?page=0&size_page=10&to_excel=false&critery=id_zkteco&order=desc`, { method: 'GET', headers })
    if (!clients.ok) {
        console.error(await clients.text())
        throw new Error('Error al obtener los clientes')
    }
    return await clients.json()
}


export const getClientByName = async (name: string = '') => {
    let headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('Authorization', token)

    const clients = await fetch(`${API_URL}clients/name/${encodeURIComponent(name)}`, { method: 'GET', headers })
    if (!clients.ok) {
        console.error(await clients.text())
        throw new Error('Error al obtener el cliente por nombre')
    }
    return await clients.json()
}
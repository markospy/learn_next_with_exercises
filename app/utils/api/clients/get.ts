const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ7XCJpZF91c2VyXCI6IFwiNzY4NTRlYTYtMmZmZS00MzhkLWFlNjgtNjFiZDRlMjY1MjljXCIsIFwiaWRfZ3ltXCI6IFwiYWNjOTE3YzQtMWE3NC00YjExLTk0YzItZTA1ZGYxMDY1MzcwXCIsIFwidXNlcm5hbWVcIjogXCJhZHJpYW5hMVwifSIsInNjb3BlcyI6WyJneW1fc3VwZXJfYWRtaW4iXSwiZXhwIjoxNzcwNjkzNDUxfQ.oiyacBTI-zivtCSCb3YcUo80lX0u5NWttA4dTLT9rAY';

export const getClients = async () => {
    let headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('Authorization', token)


    try {
        const clients = await fetch('https://fitlink.info/v1/clients/?page=0&size_page=10&to_excel=false&critery=id_zkteco&order=desc', { method: 'GET', headers })
        return await clients.json()
    } catch (error) {
        console.error(error)
        throw new Error('Error al obtener los clientes')
    }
}


export const getClientByName = async (name: string = '') => {
    let headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('Authorization', token)

    try {
        const clients = await fetch(`https://fitlink.info/v1/clients/name/${encodeURIComponent(name)}`, { method: 'GET', headers })
        return await clients.json()
    } catch (error) {
        console.error(error)
        throw new Error('Error al obtener los clientes')
    }
}
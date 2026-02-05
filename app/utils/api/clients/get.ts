const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ7XCJpZF91c2VyXCI6IFwiNzY4NTRlYTYtMmZmZS00MzhkLWFlNjgtNjFiZDRlMjY1MjljXCIsIFwiaWRfZ3ltXCI6IFwiYWNjOTE3YzQtMWE3NC00YjExLTk0YzItZTA1ZGYxMDY1MzcwXCIsIFwidXNlcm5hbWVcIjogXCJhZHJpYW5hMVwifSIsInNjb3BlcyI6WyJneW1fc3VwZXJfYWRtaW4iXSwiZXhwIjoxNzcwNjkzNDUxfQ.oiyacBTI-zivtCSCb3YcUo80lX0u5NWttA4dTLT9rAY';

export const getClients = async (name: string = '') => {
    let headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('Authorization', token)


    let init = { method: 'GET',
                headers: headers,
            }

    const clients = await fetch(`https://fitlink.info/v1/clients/?page=0&size_page=10&to_excel=false&name=${name}&critery=id_zkteco&order=desc`, init)

    return clients.json()
}


export const getClientByName = async (name: string = '') => {
    let headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('Authorization', token)


    let init = { method: 'GET',
                headers: headers,
            }

    const clients = await fetch(`https://fitlink.info/v1/clients/name/${name}`, init)

    return clients.json()
}
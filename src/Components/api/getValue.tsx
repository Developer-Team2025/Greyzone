// var local = 'http://localhost:5001'
var production = 'https://nodejs-google.vercel.app'

export const api = async(url: any, body: any) =>{
    const response = await fetch(`${production}/scarlettelove/${url}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json', // Make sure the server knows it's JSON
        },
        body:JSON.stringify(body)
    })
        const json = await response.json()
        const status = json
    return status
}

export const formApi = (url: any, body: any) =>{
    return api(url, body)
}
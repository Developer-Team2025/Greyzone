// var local = 'http://localhost:5001'
var production = 'https://scarlettelove.com/api'

export const api = async(url: any, body: any) =>{
    try{
        const response = await fetch(`${production}/${url}`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json', // Make sure the server knows it's JSON
            },
            body:JSON.stringify(body)
        })
            const json = await response.json()
            const status = json
        return status
    }catch(e){
        const err = {errors: "Something went wrong"}
        return err
    }
}

export const formApi = (url: any, body: any) =>{
    return api(url, body)
}

var domain = window.location.origin
var production = domain
// var local = 'http://localhost:5001'
var local = 'http://127.0.0.1:8080'
export const api = async (url: any, body: any) => {
    try {
        const response = await fetch(`${local}/api/${url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Make sure the server knows it's JSON
            },
            body: JSON.stringify(body)
        })
        const json = await response.json()
        const status = json
        return status
    } catch (e) {
        const err = { errors: "Something went wrong" }
        return err
    }
}

export const formApi = (url: any, body: any) => {
    return api(url, body)
}

/**
 * Backend Master Production
 *
 * Name: PJ
 * Description: Route gateway from backend
 * Feature: Api Service
 */

class ApiService {

    private baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    private async request(url: string, body: RequestInit): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}${url}`, body)

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            return await response.json();

        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }

    async get(request: any): Promise<any> {
        return this.request(request, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
    }

    async post(request: any): Promise<any> {
        return this.request(request, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
    }
}

export default new ApiService(`${production}/api`)
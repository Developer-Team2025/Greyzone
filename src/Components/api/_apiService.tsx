/**
 * Backend Master Production
 *
 * Name: PJ
 * Description: Route gateway from backend
 */


class HttpService {

    private baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    // private async request(endpoint: string, options: RequestInit): Promise<any> {
    //     try {
    //         const response = await fetch(`${this.baseUrl}${endpoint}`, options)

    //         if (!response.ok) {
    //             throw new Error(`HTTP Error! Status: ${response.status}`);
    //         }

    //         return await response.json();

    //     } catch (error) {
    //         console.error("Fetch error:", error);
    //         throw error;
    //     }
    // }

    // async get(endpoint: string, headers: Record<string, string> = {}): Promise<any> {
    //     return this.request(endpoint, {
    //         method: "GET",
    //         headers: { "Content-Type": "application/json", ...headers },
    //     })
    // }

    private async request(endpoint: any, data: any): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, data)
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }

    async getOurTeamApi(url: any, body: any): Promise<any> {
        return this.request(url, {
            method: "GET",
            headers: { "Content-Type": "application/json", ...body }
        })
    }

}

export default HttpService;
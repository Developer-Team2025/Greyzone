/**
 * Backend Master Production
 *
 * Name: PJ
 * Description: Route gateway from backend
 * Feature: Api Service
 */

class HostService {

    private httpServer: string;

    constructor(httpServer: string) {
        this.httpServer = httpServer;
    }

    private async request(endpoint: string, { method, headers = {}, body = null }: { method?: string; headers?: any; body?: any; }): Promise<any> {
        try {
            const requestOptions: RequestInit = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...headers
                },
                body: body ? JSON.stringify(body) : null
            };

            const response = await fetch(`${this.httpServer}/api/${endpoint}`, requestOptions);

            const responseData = await response.json();

            return responseData;

        } catch (error) {
            console.error("Something Went Wrong: ", error);
            throw error;
        }
    }

    async get(url: string, headers: Record<string, string> = {}): Promise<any> {
        return this.request(url, { method: "GET", headers });
    }

    async post(url: string, body: any, headers: Record<string, string> = {}): Promise<any> {
        return this.request(url, { method: "POST", headers, body });
    }
}

const domain = 'http://localhost:8000'

// const domain = 'https://scarlettelove.com'

const HttpService = new HostService(domain)

export default HttpService
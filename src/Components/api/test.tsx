class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async request(url: string, { method, body = null, headers = {} }: { method: string; body?: any; headers?: Record<string, string> }): Promise<any> {
        if (!method) {
            throw new Error("HTTP method is required");
        }

        const defaultHeaders: Record<string, string> = {
            'Content-Type': 'application/json',
            ...headers
        };

        const options: RequestInit = { method, headers: defaultHeaders };
        if (body) options.body = JSON.stringify(body);

        try {
            const response = await fetch(`${this.baseUrl}${url}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error: any) {
            console.error("Fetch error:", error);
            return { errors: error.message || "Something went wrong" };
        }
    }

    async get(url: string, headers: Record<string, string> = {}): Promise<any> {
        return this.request(url, { method: "GET", headers });
    }

    async post(url: string, body: any, headers: Record<string, string> = {}): Promise<any> {
        return this.request(url, { method: "POST", body, headers });
    }
}

const domain = window.location.origin;
const apiService = new ApiService(`${domain}/api`);

export default apiService;

// Unit tests
// if (typeof module !== "undefined" && module.exports) {
//     const assert = require("assert");

//     (async () => {
//         const mockFetch = async (url: string, options: RequestInit) => {
//             if (url.includes("error")) {
//                 return { ok: false, status: 500, json: async () => ({ error: "Server Error" }) };
//             }
//             return { ok: true, status: 200, json: async () => ({ success: true }) };
//         };

//         global.fetch = mockFetch;
//         const api = new ApiService("https://mockapi.com");

//         // Test success response
//         const successResponse = await api.get("/test");
//         assert.deepStrictEqual(successResponse, { success: true }, "Success response did not match");

//         // Test error response
//         const errorResponse = await api.get("/error");
//         assert.deepStrictEqual(errorResponse, { errors: "HTTP error! Status: 500" }, "Error response did not match");

//         console.log("All tests passed!");
//     })();
// }

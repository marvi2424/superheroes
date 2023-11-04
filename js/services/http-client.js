
class HttpClient {
    constructor(baseUrl, defaultOptions = {}) {
        this.baseUrl = baseUrl;
        this.defaultOptions = defaultOptions;
    }

    async request(method, endpoint = "", options = {}) {
        try {
            const url = endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
            const mergedOptions = {
                method,
                ...this.defaultOptions,
                ...options,
            };

            const response = await fetch(url, mergedOptions);
            return response;

        } catch (error) {
            throw new Error(`HTTP request failed: ${error.message}`);
        }
    }

}

export { HttpClient };


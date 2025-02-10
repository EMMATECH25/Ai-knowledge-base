class AIKnowledgeBaseSDK {
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }

    async request(endpoint, method = "GET", body = null, token = null) {
        const headers = {
            "Content-Type": "application/json",
        };

        if (this.apiKey) {
            headers["Authorization"] = `Bearer ${this.apiKey}`;
        }

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const options = {
            method,
            headers,
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${this.baseURL}${endpoint}`, options);
        return response.json();
    }

    async register(username, password, role = "user") {
        return this.request("/register", "POST", { username, password, role });
    }

    async login(username, password) {
        return this.request("/login", "POST", { username, password });
    }

    async askQuestion(token, question) {
        return this.request("/ask", "POST", { question }, token);
    }
}

// Export the SDK for use in frontend or other services
module.exports = AIKnowledgeBaseSDK;

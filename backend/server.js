require("dotenv").config();

const openaiApiKey = process.env.OPENAI_API_KEY;
const dbUrl = process.env.DATABASE_URL;
const redisUrl = process.env.REDIS_URL;
const jwtSecret = process.env.JWT_SECRET;

console.log("OpenAI Key:", openaiApiKey ? "Loaded" : "Missing");
console.log("Database URL:", dbUrl ? "Loaded" : "Missing");
console.log("Redis URL:", redisUrl ? "Loaded" : "Missing");
console.log("JWT Secret:", jwtSecret ? "Loaded" : "Missing");

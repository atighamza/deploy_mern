import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Connexion à Redis Cloud via l'URL de l'environnement
console.log("redis :",process.env.REDIS_URL);
export const redis = new Redis(process.env.REDIS_URL);

// Vérification de la connexion
redis.on("connect", () => {
    console.log("✅ Connected to Redis Cloud successfully!");
});

redis.on("error", (err) => {
    console.error("❌ Redis connection error:", err);
});


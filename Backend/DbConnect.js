import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export const DbConnection = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

DbConnection.on("connect", () => {
  console.log("Połączono z PostgreSQL");
});

DbConnection.on("error", (error) => {
  console.error("Błąd PostgreSQL:", error);
});
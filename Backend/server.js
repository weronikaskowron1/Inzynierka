const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

const app = express();
const PORT = process.enc.PORT;

app.use(cors());
app.use(express.json());

//Połączenie z bazą danych
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = pool;

app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Błąd serwera" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
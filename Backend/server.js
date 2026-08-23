import express from "express";
import dotenv from "dotenv";

//importy
import getStudios from "./Api/GetApi/GetStudios.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//GetApi
app.use('/api/salony',getStudios);

//PostApi

app.listen(PORT, () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
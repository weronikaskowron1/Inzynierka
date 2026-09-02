import express from "express";
import dotenv from "dotenv";

//importy
import getStudios from "./Api/GetApi/GetStudios.js";
import getCompany from "./Api/GetApi/GetCompany.js";
import getUser from "./Api/GetApi/GetUser.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//GetApi
app.use('/api/salony',getStudios);
app.use('/api/uzytkownicy',getUser);
app.use('/api/firmy',getCompany);

//PostApi

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
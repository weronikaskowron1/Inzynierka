import express from "express";
import dotenv from "dotenv";

//importy
import getStudios from "./Api/GetApi/GetStudios.js";
import getVisitCards from "./Api/GetApi/GetVisitCards.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//GetApi
app.use('/api/salony',getStudios);
app.use('/api/visitcards', getVisitCards );

//PostApi

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
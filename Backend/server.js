import express from "express";
import dotenv from "dotenv";

//importy
import getStudios from "./Api/GetApi/GetStudios.js";
import getCompany from "./Api/GetApi/GetCompany.js";
import getUser from "./Api/GetApi/GetUser.js";
import getCategories from "./Api/GetApi/GetCategories.js";
import putUser from "./Api/PutApi/PutUser.js";
import putAdressUser from "./Api/PutApi/PutAdressUser.js";
import DeleteUser from "./Api/DeleteApi/DeleteUser.js";
import putImage from "./Api/PutApi/PutImage.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//GetApi
app.use('/api/salony',getStudios);
app.use('/api/uzytkownicy',getUser);
app.use('/api/firmy',getCompany);
app.use('/api/kategorie',getCategories);

//PostApi

//PutApi
app.use('/api/uzytkownicy',putUser);
app.use('/api/uzytkownicy/adres',putAdressUser);
app.use('/api/zdjecie',putImage);

//DeleteAPI
app.use('/api/delete/uzytkownik',DeleteUser);

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
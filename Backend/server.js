import express from "express";
import dotenv from "dotenv";
import LoginUser from "./API/PostUser/LoginUser.js";
import RegisterUser from "./API/PostUser/RegisterUser.js";
import GoogleAuthCheck from "./API/PostUser/GoogleAuthCheck.js";
import RegisterGoogleUser from "./API/PostUser/RegisterGoogleUser.js";
dotenv.config();



import getStudios from "./Api/GetApi/GetStudios.js";
import getEmployerStudios from "./Api/GetApi/GetEmployerStudios.js";
import getEmployeeCount from "./Api/GetApi/getEmployeeCount.js";
import getVisitCards from "./Api/GetApi/GetVisitCards.js";
import getCompany from "./Api/GetApi/GetCompany.js";
import getUser from "./Api/GetApi/GetUser.js";
import getCategories from "./Api/GetApi/GetCategories.js";
import putUser from "./Api/PutApi/PutUser.js";
import putAdressUser from "./Api/PutApi/PutAdressUser.js";
import DeleteUser from "./Api/DeleteApi/DeleteUser.js";
import putImage from "./Api/PutApi/PutImage.js";
import BlockUnblockUser from "./Api/PutApi/BlockUnblockUser.js";
import getAllProfiles from "./Api/GetApi/GetAllProfiles.js";
import putCompany from "./Api/PutApi/PutCompany.js";
import getEmployees from "./Api/GetApi/getEmployees.js";
import DeleteStudio from "./Api/DeleteApi/DeleteStudio.js";
import DeleteEmployee from "./Api/DeleteApi/DeleteEmployee.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//GetApi
app.use('/api/salony',getStudios);
app.use("/api/login",LoginUser);
app.use("/api/register",RegisterUser);
app.use("/api/google-auth-check",GoogleAuthCheck)
app.use("/api/register-google",RegisterGoogleUser)
app.use('/api/salony',getEmployerStudios);
app.use('/api/employee_count',getEmployeeCount);
app.use('/api/pracownicy',getEmployees);
app.use('/api', getVisitCards );
app.use('/api/uzytkownicy',getUser);
app.use('/api/firmy',getCompany);
app.use('/api/kategorie',getCategories);
app.use('/api/profile',getAllProfiles);


//PostApi

//PutApi
app.use('/api/uzytkownicy',putUser);
app.use('/api/firmy',putCompany);
app.use('/api/uzytkownicy/adres',putAdressUser);
app.use('/api/zdjecie',putImage);
app.use('/api/block/uzytkownik',BlockUnblockUser);

//DeleteAPI
app.use('/api/delete/uzytkownik',DeleteUser);
app.use('/api/delete/salon',DeleteStudio);
app.use('/api/delete/pracownik',DeleteEmployee);

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});

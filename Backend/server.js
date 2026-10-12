import express from "express";
import dotenv from "dotenv";
import LoginUser from "./API/PostUser/LoginUser.js";
import RegisterUser from "./API/PostUser/RegisterUser.js";
import GoogleAuthCheck from "./API/PostUser/GoogleAuthCheck.js";
import RegisterGoogleUser from "./API/PostUser/RegisterGoogleUser.js";
dotenv.config();


//importy
import getStudios from "./Api/GetApi/GetStudios.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//GetApi
app.use('/api/salony',getStudios);
app.use("/api/login",LoginUser);
app.use("/api/register",RegisterUser);
app.use("/api/google-auth-check",GoogleAuthCheck)
app.use("/api/register-google",RegisterGoogleUser)
//PostApi

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
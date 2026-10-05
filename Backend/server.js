import express from "express";
import dotenv from "dotenv";
import LoginUser from "./API/PostUser/LoginUser.js";
import RegisterUser from "./API/PostUser/RegisterUser.js";

dotenv.config();



import getStudios from "./Api/GetApi/GetStudios.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//GetApi
app.use('/api/salony',getStudios);
app.use("/api/login",LoginUser);
app.use("/api/register",RegisterUser);

//PostApi

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});

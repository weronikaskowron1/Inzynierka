import {DbConnection} from "../../DbConnect.js";

export default async function RegisterGoogleUser(req,res) {
    const {name,surname,phoneNumber,birthDate,googleId} = req.body;

    try {
        const phoneCheck=await DbConnection.query(
            "SELECT id from users WHERE phone=$1",
            [phoneNumber]
        );

        if (phoneCheck.rows.length>0){
            return res.status(400).json({
            field: "phone",
            message: "Ten numer telefonu juz istnieje w bazie",
            });
        }

        const result = await DbConnection.query(
            "INSERT INTO users (name,surname,phone,email,birth_date,last_logged,googleId) VALUES ($1,$2,$3,$4,$5,NOW(),$6) RETURNING id,name,surname,email,phone",
            [name,surname,phoneNumber,email,birthDate,googleId]
        );

        const newUser = result.rows[0];

        return res.json({
            message:"Zarejestrowano poprawnie",
            user: {
                id:user.id,
                name:user.name,
                surname:user.surname,
                email: user.email,
                phone: user.phone,
            },
        });
    } catch (error) {
      console.error("Błąd rejestracji przez Google",error);
      res.status(500).json({message:"Błąd serwera"});
    }

}
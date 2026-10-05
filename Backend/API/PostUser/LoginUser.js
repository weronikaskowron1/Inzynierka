import {DbConnection} from "../../DbConnect.js";

export default async function LoginUser(req,res) {
    const {email,password} = req.body;

    try {
        const result=await DbConnection.query(
            "SELECT * from users WHERE email=$1",
            [email]
        );

        if (result.rows.length==0){
            return res.status(400).json({message:"Nie znaleziono użytkownika"})
        }

        const user=result.rows[0];

        if (user.password !=password){
            return res.status(400).json({message: "Nieprawidłowe hasło lub email"})
        }

        await DbConnection.query(
            "UPDATE users SET last_logged=NOW() WHERE id=$1",
            [user.id]
        );

        return res.json({
            message:"Zalogowano pomyślnie",
            user: {
                id:user.id,
                name:user.name,
                surname:user.surname,
                email: user.email,
                phone: user.phone,
                image_path: user.image_path,
                sex:user.sex,
                id_adress: user.id_adress,
                last_logged:new Date(),
            },
        });
    } catch (error) {
      console.error("Błąd logowania",error);
      res.status(500).json({message:"Błąd serwera"});
    }

}
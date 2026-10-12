import {DbConnection} from "../../DbConnect.js";

export default async function RegisterUser(req,res) {
    const {name,surname,phoneNumber,email,password,birthDate} = req.body;

    try{
        const emailCheck = await DbConnection.query(
            "SELECT id FROM users WHERE email=$1",
            [email]
            ) ;

            if (emailCheck.rows.length > 0) {
               return res.status(400).json({
                field: "email",
                message: "Ten adres e-mail jest już zarejestrowany"
               });
               }
        const phoneCheck = await DbConnection.query(
            "SELECT id FROM users WHERE phone=$1",
            [phoneNumber]
        );

        if (phoneCheck.rows.length > 0) {
            return res.status(400).json({
                field: "phone",
                message: "Ten numer telefonu już istnieje w bazie",
            });
        }

        const result = await DbConnection.query(
            "INSERT INTO users (name,surname,phone,email,password,birth_date,last_logged) VALUES ($1,$2,$3,$4,$5,$6,NOW()) RETURNING id, name, surname, email, phone",
            [name,surname,phoneNumber,email,password,birthDate]
        );

        const newUser = result.rows[0];

        return res.json({
            message: "Zarejestrowano poprawnie",
            user: {id:newUser.id,
                   name:newUser.name,
                   surname:newUser.surname,
                   email:newUser.email,
                   phone:newUser.phone,
            },
        });
    }
    catch (error) {
        console.error("Błąd rejestracji",error);
        res.status(500).json({message: "Błąd serwera"});

    }

}
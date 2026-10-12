import {DbConnection} from "../../DbConnect.js";

export default async function GoogleAuthCheck(req,res) {
    const {email,googleId} = req.body;

    try {
        const userCheck=await DbConnection.query(
            "SELECT id, name, surname, email, phone, image_path, sex, id_adress FROM users WHERE email=$1",
            [email]
        );

        if (userCheck.rows.length>0){
            const user = userCheck.rows[0];
            await DbConnection.query(
            "UPDATE users SET last_logged=NOW(), google_id=$1 WHERE id=$2",
            [googleId,user.id]
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
                    },
            });

        }

        return res.json({exists: false});

    } catch (error) {
      console.error("Błąd Google Auth",error);
      res.status(500).json({message:"Błąd serwera"});
    }

}
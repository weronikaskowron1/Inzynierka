import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/:id", async (req, res) => {
try {
    const id = req.params.id;
    const results = await DbConnection.query(`
    SELECT u.*,a.*,
    (SELECT COUNT(*) FROM favourites f WHERE f.id_user = u.id) polubione,
    (SELECT COUNT(*) FROM reservations r WHERE r.id_user = u.id AND r.data>NOW()) przyszle_rezerwacje
    FROM users u
    JOIN adresses a
    ON u.id_adress=a.id
    WHERE u.id = $1;
    `,[req.params.id]);
    res.json(results.rows);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: `Błąd bazy danych: ${err}` });
}
});

export default router;
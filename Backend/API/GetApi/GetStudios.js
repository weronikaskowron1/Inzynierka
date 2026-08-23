import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
try {
    const results = await DbConnection.query(`
    SELECT c.id, c.name, c.image_path,
        (SELECT AVG(rating)
        FROM opinions o
        LEFT JOIN reservations r
        ON o.id_reservation=r.id
        WHERE c.id=r.id_company
        GROUP BY id_company) AS avg_rating
    FROM companies c
    GROUP BY c.id;
    `);
    res.json(results.rows);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: `Błąd bazy danych: ${err}` });
}
});

export default router;
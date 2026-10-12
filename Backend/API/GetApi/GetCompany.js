import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/:id", async (req, res) => {
try {
    const id = req.params.id;

    const results = await DbConnection.query(`
        SELECT co.id, co.name, co.email, co.password, co.phone, co.image_path, co.website, co.nip, co.regon, co.krs, co.created_at, ca.name category
        FROM companies co
        JOIN categories ca
        ON id_category=ca.id
        WHERE co.id = $1;
        `,[req.params.id]);

    res.json(results.rows);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: `Błąd bazy danych: ${err}` });
}
});

export default router;
import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
try {
    const id = req.params.id;

    const results = await DbConnection.query(`
        SELECT id, name
        FROM categories
        `);

    res.json(results.rows);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: `Błąd bazy danych: ${err}` });
}
});

export default router;
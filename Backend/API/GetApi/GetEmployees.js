import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/:id", async (req, res) => {
try {
const id = req.params.id;
    const results = await DbConnection.query(`
    SELECT emp.*, e_s.id_studio
        FROM employees emp
        LEFT JOIN employees_studios e_s
        ON emp.id = e_s.id_employee
         WHERE e_s.id_studio = $1;
         `,[req.params.id]);
    res.json(results.rows);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: `Błąd bazy danych: ${err}` });
}
});

export default router;
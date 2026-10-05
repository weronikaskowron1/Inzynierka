import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/company/:companyId", async (req, res) => {
  try {
    const { companyId } = req.params;

    const results = await DbConnection.query(
      `
    SELECT COUNT(DISTINCT(id_employee)) FROM employees_studios es
    LEFT JOIN studios s
    ON es.id_studio = s.id_studio
    WHERE s.id_company = $1;
    `,
      [companyId],
    );
    res.json(results.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Błąd bazy danych: ${err}` });
  }
});

export default router;

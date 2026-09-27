import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const results = await DbConnection.query(`
      SELECT
        r.id,
        r.data,
        c.name AS company_name,
        s.name AS service_name,
        s.duration

      FROM reservations r

      JOIN companies c
        ON r.id_company = c.id

      JOIN services s
        ON r.id_service = s.id


      WHERE r.id_user = $1

      ORDER BY r.data;
    `, [userId]);

    res.json(results.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Błąd bazy danych" });
  }
});

export default router;
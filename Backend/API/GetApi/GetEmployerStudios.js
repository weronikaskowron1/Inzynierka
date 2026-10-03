import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.get("/company/:companyId", async (req, res) => {
  try {
    const { companyId } = req.params;

    const results = await DbConnection.query(
      `
    SELECT st.id_studio, st.name, c.image_path, a.street,
            (SELECT ROUND(AVG(o.rating)::numeric, 1)
            FROM opinions o
            LEFT JOIN reservations r
            ON o.id_reservation=r.id
            WHERE st.id_studio=r.id_studio) AS avg_rating
        FROM studios st
        LEFT JOIN companies c
        ON c.id = st.id_company
        LEFT JOIN adresses a
        ON a.id = st.id_adress

        WHERE c.id = $1
        ORDER BY st.id_studio;
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

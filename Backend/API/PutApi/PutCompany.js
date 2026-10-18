import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const { name, website, email, nip, regon, krs } = req.body;

    const result = await DbConnection.query(
      `
      UPDATE companies
      SET name = $1, website = $2, email = $3, nip = $4, regon = $5, krs = $6
      WHERE id = $7
      RETURNING *;
      `,
      [ name, website, email, nip, regon, krs, id ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Nie znaleziono użytkownika"
      });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: `Błąd bazy danych: ${err.message}`
    });
  }
});

export default router;
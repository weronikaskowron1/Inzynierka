import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const { name, surname, email, phone, sex } = req.body;

    const result = await DbConnection.query(
      `
      UPDATE users
      SET name = $1, surname = $2, email = $3, phone = $4, sex = $5
      WHERE id = $6
      RETURNING *;
      `,
      [ name, surname, email, phone, sex, id ]
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
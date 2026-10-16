import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
     const result = await DbConnection.query(
      `
      DELETE FROM employees
      WHERE id = $1
      RETURNING *;
      `,
      [ id ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Nie znaleziono pracownika"
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
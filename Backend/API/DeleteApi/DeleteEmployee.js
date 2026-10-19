import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.delete("/:id_employee/:id_studio", async (req, res) => {
  try {
    const {id_employee, id_studio} = req.params;
     const result = await DbConnection.query(
      `
      DELETE FROM employees_studios
      WHERE id_employee = $1 AND id_studio=$2
      RETURNING *;
      `,
      [ id_employee, id_studio ]
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
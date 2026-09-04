import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { user_type } = req.body;
    let result;
    if(user_type==='user')
    {
         result = await DbConnection.query(
          `
          DELETE FROM users
          WHERE id = $1
          RETURNING *;
          `,
          [ id ]
        );
    }
    else
    {
         result = await DbConnection.query(
          `
          DELETE FROM companies
          WHERE id = $1
          RETURNING *;
          `,
          [ id ]
        );
    }

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Nie znaleziono użytkownika lub firmy"
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
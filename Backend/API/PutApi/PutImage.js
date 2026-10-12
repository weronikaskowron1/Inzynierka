import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const { image_path, user_type } = req.body;

    let result;

    if(user_type === 'user')
    {
        result = await DbConnection.query(
          `
          UPDATE users
          SET image_path = $1
          WHERE id = $2
          RETURNING *;
          `,
          [ image_path, id ]
        );
    }
    else
    {
        result = await DbConnection.query(
          `
          UPDATE companies
          SET image_path = $1
          WHERE id = $2
          RETURNING *;
          `,
          [ image_path, id ]
        );
    }
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
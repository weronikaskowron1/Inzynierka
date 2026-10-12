import { DbConnection } from "../../DbConnect.js";
import express from "express";
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const { street, building_number, apartment_number, postal_code, city, id_adress } = req.body;
    const result = await DbConnection.query(
      `
      UPDATE adresses
      SET street = $1, building_number = $2, apartment_number = $3, postal_code = $4, city = $5
      WHERE id = $6
      RETURNING *;
      `,
      [ street, building_number, apartment_number, postal_code, city, id_adress ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Nie znaleziono adresu"
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
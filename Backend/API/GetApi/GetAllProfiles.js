import { DbConnection } from "../../DbConnect.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const results = await DbConnection.query(`
      SELECT id, name, surname, email, image_path, blocked
      FROM users;
    `);

    const results_companies = await DbConnection.query(`
      SELECT id, name, email, image_path, blocked
      FROM companies;
    `);

    const users = results.rows.map(user => ({
      ...user,
      user_type: "user",
    }));

    const companies = results_companies.rows.map(company => ({
      ...company,
      user_type: "employer",
    }));

    res.json([
      ...users,
      ...companies,
    ]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Błąd bazy danych",
    });
  }
});

export default router;

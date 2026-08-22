import express from "express";
import cors from "cors";

export function StartApi(app) {
  app.use(cors());
  app.use(express.json());
  app.get("/api/salony", async (req, res) => {
    let db;
    try {
      db = await DbConnection();

      const [rows] = await db.query(`
        SELECT c.id, c.name, c.image_path,
        	(SELECT AVG(rating)
        	FROM opinions o
        	LEFT JOIN reservations r
        	ON o.id_reservation=r.id
        	WHERE c.id=r.id_company
        	GROUP BY id_company) AS avg_rating
        FROM companies c
        GROUP BY c.id;
    `);
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Błąd serwera" });
    } finally {
      if (db) await db.end();
    }
  });
import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, age, desire, hobby, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO form_data (name, age, desire,hobby, email) VALUES ($1, $2, $3, $4,$5)',
      [name, age,desire, hobby, email]
    );
    res.status(201).send("Data saved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;

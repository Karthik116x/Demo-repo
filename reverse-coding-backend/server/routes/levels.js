import express from 'express';
import db from '../db.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM levels ORDER BY level_number');
    res.json(rows);
  } catch (err) { next(err); }
});

export default router;
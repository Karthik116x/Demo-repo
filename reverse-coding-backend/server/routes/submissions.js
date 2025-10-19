import express from 'express';
import db from '../db.js';
import { createSubmission, getSubmissionResult } from '../utils/judge0.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { user_id, level_number, code, language_id } = req.body;
    const { rows } = await db.query('SELECT id, points FROM levels WHERE level_number=$1', [level_number]);
    if (!rows.length) return res.status(400).json({ error: 'Invalid level' });
    const level = rows[0];
    const subRes = await db.query(
      'INSERT INTO submissions (user_id, level_id, code, language_id, status) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [user_id, level.id, code, language_id, 'pending']
    );
    const submission = subRes.rows[0];
    const judgeRes = await createSubmission({ source_code: code, language_id });
    await db.query('UPDATE submissions SET judge0_token=$1,status=$2 WHERE id=$3',
      [judgeRes.token, 'running', submission.id]);
    res.json({ submissionId: submission.id, token: judgeRes.token });
  } catch (err) { next(err); }
});

export default router;
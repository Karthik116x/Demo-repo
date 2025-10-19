import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import levelsRouter from './routes/levels.js';
import leaderboardRouter from './routes/leaderboard.js';
import submissionsRouter from './routes/submissions.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));

app.use('/api/levels', levelsRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/submissions', submissionsRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
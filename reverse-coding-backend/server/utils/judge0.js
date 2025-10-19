import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const JUDGE0_URL = process.env.JUDGE0_URL;
const JUDGE0_KEY = process.env.JUDGE0_KEY;

export async function createSubmission({ source_code, language_id, stdin = '' }) {
  const payload = { source_code, language_id, stdin };
  const headers = JUDGE0_KEY ? { 'X-RapidAPI-Key': JUDGE0_KEY } : {};
  const res = await axios.post(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=false`, payload, { headers });
  return res.data;
}

export async function getSubmissionResult(token) {
  const headers = JUDGE0_KEY ? { 'X-RapidAPI-Key': JUDGE0_KEY } : {};
  const res = await axios.get(`${JUDGE0_URL}/submissions/${token}?base64_encoded=false`, { headers });
  return res.data;
}
import express from 'express';
import { analyzeUrl , getAllReports } from '../controllers/psiController.js';

const router = express.Router();

// Route: GET /api/insights/analyze?url=https://example.com
router.get('/', getAllReports); // GET /api/insights

router.post('/analyze', analyzeUrl);

export default router;

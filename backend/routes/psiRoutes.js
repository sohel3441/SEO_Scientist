import express from 'express';
import { analyzeUrl , getAllReports } from '../controllers/psiController.js';

const router = express.Router();

router.get('/', getAllReports);

router.post('/analyze', analyzeUrl);

export default router;

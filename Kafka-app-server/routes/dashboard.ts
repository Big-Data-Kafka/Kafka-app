import express from 'express'
import { getOverallStats, getStatsPerProduct, getMostVP } from '../controllers/dashboard';
const router= express.Router();

router.get('/api/overallStats', getOverallStats);
router.get('/api/statsPerProduct', getStatsPerProduct);
router.get('/api/mostVP', getMostVP);
// router.post('/api/getUserStats', getUserStats);


export default router
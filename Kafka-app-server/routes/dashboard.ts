import express from 'express'
import { getOverallStats, getStatsPerProduct, getMostVP, getUserStats } from '../controllers/dashboard';
const router= express.Router();

router.get('/api/overallStats', getOverallStats);
router.get('/api/statsPerProduct', getStatsPerProduct);
router.get('/api/mostVP', getMostVP);
router.get('/api/userStats', getUserStats);


export default router
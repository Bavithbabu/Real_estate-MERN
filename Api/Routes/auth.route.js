import express from 'express'
import signup from '../controllers/signup.control.js';

const router = express.Router()

router.post('/signup',signup);

export default router;
import express from 'express';
import sample from '../controllers/sample';

const router = express.Router();

router.get('/', sample.sample);

export default router;

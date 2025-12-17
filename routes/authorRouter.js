import express from 'express';
import { getAuthor } from '../controllers/authorController.js';
// const router = express.Router();

const router = express.Router();
router.get('/', (req, res) => res.send('All Authors'));
router.get('/:authorId', getAuthor);

export default router;
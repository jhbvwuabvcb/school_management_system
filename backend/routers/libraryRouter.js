import express from 'express';
import { createBook, getAllBooks } from '../controllers/libraryController.js'; // ✅ Corrected import

const router = express.Router();

router.get('/getall', getAllBooks);
router.post('/', createBook); // ✅ Corrected function name

export default router;

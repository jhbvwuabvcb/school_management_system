import { Book } from '../models/librarySchema.js';
import { handleValidationError } from "../middleware/errorHandler.js";

export const createBook = async (req, res, next) => {  // ✅ Renamed to match the import
    console.log(req.body);
    const { bookname, author } = req.body;

    try {
        if (!bookname || !author) {
            throw handleValidationError("Please fill full form", 400); // ✅ Corrected error handling
        }

        await Book.create({ bookname, author });

        res.status(201).json({
            success: true,
            message: "A new book is created successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find(); // ✅ Fixed incorrect model reference

        res.status(200).json({
            success: true,
            books,
        });
    } catch (err) {
        next(err);
    }
};

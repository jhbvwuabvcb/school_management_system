import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true
    }, 
    author: {
        type: String,
        required: true
    }  
});

// ✅ Correct export
export const Book = mongoose.model('Book', librarySchema);

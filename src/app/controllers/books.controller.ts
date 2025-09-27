import express, { NextFunction, Request, Response } from 'express'
import { Book } from '../model/books.model';

export const bookRoutes = express.Router()


// Get All Books
bookRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await Book.find()
        res.status(201).json({
            message: "All books fetched successfully",
            data: books,
        });
    } catch (error) {
        next(error)
    }
})
// Get single book by id
bookRoutes.get("/:bookID", async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bookID = req.params.bookID

        const book = await Book.findById(bookID)


        res.status(201).json({
            message: "A book fetched successfully",
            data: book,
        });
    } catch (error) {
        next(error)
    }
})
// Create a book
bookRoutes.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookData = req.body
        const book = await Book.create(bookData)
        res.status(201).json({
            message: "A book create successfully",
            data: book,
        });
    } catch (error) {

        next(error)
    }
})
// Update a book
bookRoutes.patch("/:bookID", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updateBookId = req.params.bookID
        const updateDoc = req.body
        const updateBook = await Book.findByIdAndUpdate(updateBookId, updateDoc, { new: true, runValidators: true })
        if (!updateBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({
            message: "A book update successfully",
            data: updateBook,
        });
    } catch (error) {
        next(error)
    }
})
// Delete a Book
bookRoutes.delete("/:bookID", async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bookID = req.params.bookID

        const book = await Book.findByIdAndDelete(bookID)

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }


        res.status(200).json({
            message: "A book deleted successfully",
            data: book
        });
    } catch (error) {
        next(error)
    }
})



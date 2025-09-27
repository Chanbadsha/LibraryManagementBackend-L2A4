import express, { NextFunction, Request, Response } from 'express'
import { BorrowBook } from '../model/borrow.model'
import { Book } from '../model/books.model'

export const borrowBooks = express.Router()

// Create Borrow
borrowBooks.post("/:bookId", async (req: Request, res: Response, next: NextFunction) => {
    try {

        const borrowedBookID = req.params.bookId

        const isExistBook = await Book.findById(borrowedBookID)
        if (!isExistBook) {
            throw new Error("Book not found")
        }
        const borrowInfo = req.body

        const borrowBook = await BorrowBook.create({ ...borrowInfo, bookId: borrowedBookID })

        res.status(201).json({
            message: "Book borrowed successfully",
            data: borrowBook
        })
    } catch (error) {
        next(error)
    }
})


// Get borrow summary

borrowBooks.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        const summary = await BorrowBook.find().populate("bookId")
        res.status(201).json({
            message: "Borrow summary here",
            data: summary
        })
    } catch (error) {
        next(error)
    }
})
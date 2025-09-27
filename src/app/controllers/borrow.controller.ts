import express, { NextFunction, Request, Response } from 'express'

export const borrowBooks = express.Router()


borrowBooks.post("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            message: "Book borrowed successfully",
            data: "Data"
        })
    } catch (error) {
        res.status(500).json({
            message: "Book borrowed failed",
            error: error instanceof Error ? error.message : error
        })
    }
})
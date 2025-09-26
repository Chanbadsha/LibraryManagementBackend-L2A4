import express, { NextFunction, Request, Response } from 'express'

const bookRoutes = express.Router()



// Get All Books
bookRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            message: "All books fetched successfully",
            //   data: books,
        });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({
            message: "Failed to fetch books",
            error: error instanceof Error ? error.message : error,
        });
    }
})
// Get single book by id
bookRoutes.get("/:bookID", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            message: "A book fetched successfully",
            //   data: books,
        });
    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({
            message: "Failed to fetch book",
            error: error instanceof Error ? error.message : error,
        });
    }
})
// Create a book
bookRoutes.post("/create/:bookID", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            message: "A book create successfully",
            //   data: books,
        });
    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({
            message: "Failed to create book",
            error: error instanceof Error ? error.message : error,
        });
    }
})
// Update a book
bookRoutes.patch("/update/:bookID", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            message: "A book update successfully",
            //   data: books,
        });
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({
            message: "Failed to update book",
            error: error instanceof Error ? error.message : error,
        });
    }
})
// Delete a Book
bookRoutes.get("/delete/:bookID", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            message: "A book deleted successfully",
            //   data: books,
        });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({
            message: "Failed to delete book",
            error: error instanceof Error ? error.message : error,
        });
    }
})



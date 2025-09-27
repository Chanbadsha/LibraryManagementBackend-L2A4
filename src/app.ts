import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { bookRoutes } from './app/controllers/books.controller'
import { borrowBooks } from './app/controllers/borrow.controller'
const app = express()

// Middleware
app.use(express.json())
app.use(cors())


// Routing
app.use("/books", bookRoutes)
app.use("/borrows", borrowBooks)

// Default Route

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = "Welcome to Baitul Hikma server"


        res.status(200).json({
            message: "Data fetched successfully",
            data: data,
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({
            message: "Failed to fetch data",
            error: error instanceof Error ? error.message : error,
        });
    }
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err)

    res.status(500).json({
        message: err.name,
        error: err instanceof Error ? err.message : err
    })
})


export default app
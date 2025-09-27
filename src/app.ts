import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { bookRoutes } from './app/controllers/books.controller'
const app = express()

// Middleware
app.use(express.json())
app.use(cors())


// Routing
app.use("/books", bookRoutes)

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

export default app
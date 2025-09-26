import dotenv from 'dotenv'
import { Server } from 'http'
import express from 'express'
import app from './app'
const port = process.env.PORT || 5000
let server: Server
dotenv.config()


const bootStrap = async () => {
    try {

        server = app.listen(port, () => {
            console.log(`Baitul Hikma server is running on port ${port} ✅`)
        })
    } catch (error) {
        console.error("❌ Error starting the server:", error);
        process.exit(1)
    }
}

bootStrap()
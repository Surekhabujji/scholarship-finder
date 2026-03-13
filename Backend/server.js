import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

import authRoutes from "./routes/authRoutes.js"
import scholarshipRoutes from "./routes/scholarshipRoutes.js"
import applicationRoutes from "./routes/applicationRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/auth", authRoutes)
app.use("/api/scholarships", scholarshipRoutes)
app.use("/api", applicationRoutes)

app.get("/", (req,res)=>{
res.send("Scholarship API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})
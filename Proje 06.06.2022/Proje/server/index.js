import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import connectDB from "./database/database.js"

// Import User Router
import userRouter from "./router/user.js"
// Import Login Router
import loginRouter from "./router/login.js"
// Import Site Setting Router
import siteSettingRouter from "./router/setting.js"
// Import Notice Router
import noticeRouter from "./router/notice.js"

// Port
const port = process.env.PORT || 5000

// Dotenv config
dotenv.config()

// Create express app instance
const app = express();
app.use(bodyParser.json())
app.use(cors())

// Router All 
app.use("/user", userRouter)
app.use("/login", loginRouter)
app.use("/sitesetting", siteSettingRouter)
app.use("/notice", noticeRouter)


// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
        // Connetion to mongoDB
    connectDB()
})
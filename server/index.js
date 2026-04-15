import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.js"
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api", router)
app.use("/uploads", express.static("uploads"))

app.listen(PORT, () => {
  console.log("server start");
})

app.use((err, req, res, next) => {
  console.log(err.stack);
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  res.status(statusCode).json({
    success: false,
    message: message,
  });
})
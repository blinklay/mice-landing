import express from "express"
import { getCurrentProduct, getProducts } from "../controllers/productController.js"
const productRouter = express.Router()

productRouter.get("/", getProducts)
productRouter.get("/:id", getCurrentProduct)

export default productRouter
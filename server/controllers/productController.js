import { products } from "../data/products.js"

export const getProducts = async (req, res, next) => {
  try {
    const productsDB = products
    return res.status(200).json({ products: productsDB })
  } catch (error) {
    next(error)
  }
}

export const getCurrentProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = products.find(i => i.id === id)

    if (!product) {
      throw new Error("Product not found!");
    }

    return res.status(200).json({ product })
  } catch (error) {
    next(error)
  }
}
import { create } from "zustand"
import api from "../api/axios"
export const useProductStore = create((set) => ({
  products: [],
  error: null,
  loading: false,
  fetchProducts: async () => {
    set(() => ({ loading: true }))
    try {
      const { data } = await api.get("/products")
      set(() => ({
        products: data.products
      }))
    } catch (error) {
      console.log(error);
      set(() => ({ error: error.message }))
    } finally {
      set(() => ({ loading: false }))
    }
  }
}))
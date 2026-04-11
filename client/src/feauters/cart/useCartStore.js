import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => ({
      ...state.cart, product
    }))
  },
  removeFromCart: (productId) => {
    set((state) => {
      return state.cart.filter(p => p.id !== productId)
    })
  }
}))

export default useCartStore
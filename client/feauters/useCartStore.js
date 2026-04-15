import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const exists = state.cart.find(p => p.id === product.id)
      if (exists) {
        return product
      }
      return {
        cart: [...state.cart, { ...product, count: 1 }]
      }
    })
  },
  increaseCount: (productId) => {
    set((state) => ({
      cart: state.cart.map(product => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 }
        }
        return product
      })
    }))
  },
  decreaseCount: (productId) => {
    set((state) => ({
      cart: state.cart.map(p => {
        if (p.id === productId) {
          if (p.count === 1) return p
          return { ...p, count: p.count - 1 }
        }

        return p
      })
    }))
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter(product => product.id !== productId)
    }))
  }
}))

export default useCartStore
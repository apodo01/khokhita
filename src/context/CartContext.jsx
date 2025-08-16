import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, qty = 1 } = action
      const existing = state.items[product.id]
      const nextQty = (existing?.qty || 0) + qty
      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: { product, qty: nextQty },
        },
      }
    }
    case 'REMOVE': {
      const { productId } = action
      if (!state.items[productId]) return state
      const next = { ...state.items }
      delete next[productId]
      return { ...state, items: next }
    }
    case 'CLEAR':
      return { items: {} }
    case 'SET_QTY': {
      const { productId, qty } = action
      if (qty <= 0) {
        const next = { ...state.items }
        delete next[productId]
        return { ...state, items: next }
      }
      const entry = state.items[productId]
      if (!entry) return state
      return {
        ...state,
        items: {
          ...state.items,
          [productId]: { ...entry, qty },
        },
      }
    }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} })

  const value = useMemo(() => {
    const entries = Object.values(state.items)
    const totalItems = entries.reduce((sum, e) => sum + e.qty, 0)
    const totalPrice = entries.reduce((sum, e) => sum + e.qty * Number(e.product.price || 0), 0)

    return {
      items: state.items,
      entries,
      totalItems,
      totalPrice,
      add: (product, qty = 1) => dispatch({ type: 'ADD', product, qty }),
      remove: (productId) => dispatch({ type: 'REMOVE', productId }),
      clear: () => dispatch({ type: 'CLEAR' }),
      setQty: (productId, qty) => dispatch({ type: 'SET_QTY', productId, qty }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}

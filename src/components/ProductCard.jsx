import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { add, items } = useCart()
  const isSelected = !!items[product.id]
  return (
    <div className="group relative border border-rose-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      {isSelected && (
        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.75 11.836l6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      <div className="aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-slate-800">{product.name}</h3>
        <p className="text-rose-700 font-semibold mt-1">{Number(product.price).toFixed(2)} DH</p>
        <button className="mt-3 w-full bg-rose-600 text-white py-2.5 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300 transition shadow-sm" onClick={() => add(product, 1)}>Ajouter au panier</button>
      </div>
    </div>
  )
}

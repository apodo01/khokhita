import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { add } = useCart()
  return (
    <div className="group border border-rose-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
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

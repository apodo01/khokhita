import ProductCard from '../components/ProductCard.jsx'
import prod1 from '../assets/product/product-1.png'
import prod2 from '../assets/product/product-2.png'
import prod3 from '../assets/product/product-3.png'
import prod4 from '../assets/product/product-4.png'
import prod5 from '../assets/product/product-5.png'
import prod6 from '../assets/product/product-6.png'
import prod7 from '../assets/product/product-7.png'
import prod8 from '../assets/product/product-8.png'

const products = [
  { id: 1, name: 'Floral Midi Dress', price: 89, image: prod1 },
  { id: 2, name: 'Leather Handbag', price: 129, image: prod2 },
  { id: 3, name: 'Pearl Earrings', price: 45, image: prod3 },
  { id: 4, name: 'Silk Scarf', price: 39, image: prod4 },
  { id: 5, name: 'Classic Trench Coat', price: 149, image: prod5 },
  { id: 6, name: 'Suede Ankle Boots', price: 99, image: prod6 },
  { id: 7, name: 'Linen Blouse', price: 59, image: prod7 },
  { id: 8, name: 'Gold Chain Necklace', price: 79, image: prod8 },
]

export default function Products() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="heading-serif text-3xl mb-6">All Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}

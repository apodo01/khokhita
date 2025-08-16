import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import prod1 from '../assets/product/product-1.png'
import prod2 from '../assets/product/product-2.png'
import prod3 from '../assets/product/product-3.png'
import prod4 from '../assets/product/product-4.png'

const featured = [
  { id: 1, name: 'Floral Midi Dress', price: 89, image: prod1 },
  { id: 2, name: 'Leather Handbag', price: 129, image: prod2 },
  { id: 3, name: 'Pearl Earrings', price: 45, image: prod3 },
  { id: 4, name: 'Silk Scarf', price: 39, image: prod4 },
]

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="featured" className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="heading-serif text-3xl text-slate-900">Featured</h2>
            <p className="text-slate-600">Our editors' picks this week</p>
          </div>
          <a href="/products" className="text-rose-700 hover:text-rose-800">View all</a>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}

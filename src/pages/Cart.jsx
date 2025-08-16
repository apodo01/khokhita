import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { entries, totalItems, totalPrice, remove, clear, setQty } = useCart()

  // Build WhatsApp message with picked items
  const waPhone = '212664944960' // Business number without plus
  const waMessage = `Achat seul via WhatsApp\n\nArticles:\n${entries
    .map(({ product, qty }) => {
      const unit = Number(product.price) || 0
      const line = unit * qty
      return `• ${product.name} x${qty} — ${unit.toFixed(2)} DH (=${line.toFixed(2)} DH)`
    })
    .join('\n')}\n\nTotal: ${totalPrice.toFixed(2)} DH\n\nNom:\nAdresse:`
  const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessage)}`

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
      <h1 className="heading-serif text-3xl mb-6">Votre panier</h1>

      {entries.length > 0 && (
        <div className="mb-6 p-4 sm:p-5 rounded-xl border border-green-200 bg-green-50">
          <div className="text-green-800 font-bold text-lg sm:text-xl">Achat seul via Whatsup</div>
        </div>
      )}

      {entries.length === 0 ? (
        <p className="text-slate-700">Votre panier est vide.</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {entries.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-4 p-4 border border-rose-100 rounded-xl bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md border"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-slate-800">{product.name}</h3>
                  <p className="text-sm text-slate-600">{Number(product.price).toFixed(2)} DH</p>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button
                      className="px-3 py-1 rounded border border-slate-300"
                      onClick={() => setQty(product.id, Math.max(0, qty - 1))}
                    >-</button>
                    <span className="min-w-8 text-center">{qty}</span>
                    <button
                      className="px-3 py-1 rounded border border-slate-300"
                      onClick={() => setQty(product.id, qty + 1)}
                    >+</button>
                  </div>
                </div>
                <button
                  className="text-rose-700 hover:underline"
                  onClick={() => remove(product.id)}
                >Supprimer</button>
              </div>
            ))}
          </div>

          <aside className="h-fit border border-rose-100 bg-rose-50/40 rounded-xl p-5">
            <h2 className="font-semibold text-slate-800 mb-3">Récapitulatif</h2>
            <div className="flex items-center justify-between text-slate-700">
              <span>Articles</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex items-center justify-between text-slate-800 mt-2">
              <span>Total</span>
              <span className="font-semibold">{totalPrice.toFixed(2)} DH</span>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center bg-rose-600 text-white py-2.5 rounded-md hover:bg-rose-700 transition"
            >Passer la commande</a>
            <button className="mt-2 w-full border border-rose-200 text-rose-700 py-2.5 rounded-md hover:bg-rose-50 transition" onClick={clear}>Vider le panier</button>
          </aside>
        </div>
      )}
    </section>
  )
}

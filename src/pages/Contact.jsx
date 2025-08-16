export default function Contact() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
      <h1 className="heading-serif text-3xl mb-6">Contact Us</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form */}
        <form className="grid gap-4 lg:col-span-2">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Name</label>
            <input className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Email</label>
            <input type="email" className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Message</label>
            <textarea rows="4" className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="How can we help?" />
          </div>
          <button className="bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition">Send</button>
        </form>

        {/* Direct contact info */}
        <aside className="border border-rose-100 bg-rose-50/40 rounded-xl p-5 h-fit">
          <h2 className="font-semibold text-slate-800 mb-3">Reach us directly</h2>
          <ul className="space-y-3 text-slate-700">
            <li>
              <span className="block text-sm text-slate-500">Phone (Morocco)</span>
              <a href="tel:+212664944960" className="text-rose-700 hover:underline">+212 664 944 960</a>
            </li>
            <li>
              <span className="block text-sm text-slate-500">Instagram</span>
              <a href="https://instagram.com/khokhitashop" target="_blank" rel="noreferrer" className="text-rose-700 hover:underline">@khokhitashop</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

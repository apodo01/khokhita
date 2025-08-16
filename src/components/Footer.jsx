export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} khokhita. All rights reserved.</p>
        <p className="text-slate-400">Crafted with ♥ for boutique elegance.</p>
      </div>
    </footer>
  )
}

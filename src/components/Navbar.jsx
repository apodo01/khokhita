import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logoImg from '../assets/logo/500539034_17879663850310751_716018081516407088_n.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = 'text-slate-700 hover:text-rose-700 hover:underline underline-offset-4 decoration-rose-300 transition-colors px-3 py-2 rounded-md'
  const active = 'text-rose-700 font-semibold'

  return (
    <header className={`sticky top-0 z-40 bg-rose-50/80 backdrop-blur border-b border-rose-100 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center" aria-label="Home">
            <span className="inline-flex items-center justify-center p-1 sm:p-1.5 bg-white rounded-full shadow-md ring-1 ring-rose-100">
              <img src={logoImg} alt="khokhitashop logo" className="h-10 sm:h-12 w-auto rounded-full" />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            <NavLink to="/" end className={({isActive}) => `${base} ${isActive ? active : ''}`}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => `${base} ${isActive ? active : ''}`}>Products</NavLink>
            <NavLink to="/about" className={({isActive}) => `${base} ${isActive ? active : ''}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${base} ${isActive ? active : ''}`}>Contact</NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md border border-rose-200 text-rose-700 hover:bg-rose-50"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              {open ? (
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.36a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div className={`${open ? 'block' : 'hidden'} sm:hidden pb-3`}
             onClick={() => setOpen(false)}>
          <nav className="grid gap-1">
            <NavLink to="/" end className={({isActive}) => `${base} ${isActive ? active : ''}`}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => `${base} ${isActive ? active : ''}`}>Products</NavLink>
            <NavLink to="/about" className={({isActive}) => `${base} ${isActive ? active : ''}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${base} ${isActive ? active : ''}`}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

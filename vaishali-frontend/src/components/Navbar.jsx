import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Landmark, Menu, X } from 'lucide-react'
import Button from './Button'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Plan Trip', path: '/plan-trip' },
  { label: 'AI Guide', path: '/ai-guide' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-700 flex items-center justify-center">
            <Landmark size={18} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">Vaishali</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-violet-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm">Login</Button>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 space-y-3 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="w-full">Login</Button>
        </div>
      )}
    </header>
  )
}

export default Navbar

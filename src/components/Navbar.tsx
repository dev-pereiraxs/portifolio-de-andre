import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-ink-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="font-display text-lg font-semibold tracking-tight" aria-label="André Pereira, início">
          André<span className="text-violet">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.slice(1).map((n) => (
            <li key={n.href}>
              <a href={n.href} className="rounded-full px-4 py-2 text-sm text-mute transition hover:text-white">{n.label}</a>
            </li>
          ))}
        </ul>
        <button className="rounded-full p-2 md:hidden" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="menu-mobile" className="border-t border-ink-line px-5 pb-5 pt-2 md:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-ink-line/60 py-3.5 text-lg text-mute transition hover:text-white">{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

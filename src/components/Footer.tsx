import { profile, socials, footerPhrase } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm text-mute sm:px-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-white">{profile.name} <span className="text-mute">· Engenharia de Software</span></p>
          <p className="mt-1">{footerPhrase}</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <ul className="flex gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition hover:text-violet-light"><Icon size={18} /></a></li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

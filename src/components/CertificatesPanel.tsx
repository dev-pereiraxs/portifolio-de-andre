import { Award } from 'lucide-react'
import { certificates } from '../data/content'

export default function CertificatesPanel() {
  if (certificates.length === 0) {
    return <p className="rounded-2xl border border-dashed border-ink-line p-10 text-center text-mute">Certificados em breve.</p>
  }
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((c, i) => (
        <li key={c.title} className="rise" style={{ ['--d' as string]: `${i * 70}ms` }}>
          <div className="group h-full overflow-hidden rounded-2xl border border-ink-line bg-ink-soft transition duration-300 hover:-translate-y-1 hover:border-violet/60">
            {c.image ? (
              <a href={c.image} target="_blank" rel="noopener noreferrer" aria-label={`Abrir certificado ${c.title}`} className="block aspect-[4/3] overflow-hidden border-b border-ink-line">
                <img src={c.image} alt={`Certificado: ${c.title}`} loading="lazy" decoding="async" className="h-full w-full bg-white object-contain transition duration-500 group-hover:scale-105" />
              </a>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center border-b border-ink-line bg-gradient-to-br from-violet-deep/40 via-ink-soft to-ink" aria-hidden="true">
                <Award size={44} className="text-violet-light/80" />
              </div>
            )}
            <div className="p-5">
              <p className="inline-block rounded-full border border-violet/40 bg-violet/10 px-3 py-0.5 text-xs text-violet-light">{c.kind}</p>
              <h3 className="mt-3 font-display text-lg font-medium leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-mute">{c.issuer} · {c.year}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

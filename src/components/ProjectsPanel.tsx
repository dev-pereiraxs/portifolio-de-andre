import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, moreProjectsUrl, type Project } from '../data/content'

function Preview({ p }: { p: Project }) {
  const [failed, setFailed] = useState(false)
  if (p.image && !failed) {
    return <img src={p.image} alt={`Prévia do projeto ${p.title}`} loading="lazy" decoding="async" onError={() => setFailed(true)} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-deep/50 via-ink-soft to-ink" aria-hidden="true">
      <span className="font-display text-6xl font-semibold text-violet-light/80">{p.title.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
    </div>
  )
}

export default function ProjectsPanel() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={p.title} className="rise" style={{ ['--d' as string]: `${i * 70}ms` }}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-line bg-ink-soft transition duration-300 hover:-translate-y-1 hover:border-violet/60 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,.45)]">
              <div className="aspect-[4/3] overflow-hidden border-b border-ink-line"><Preview p={p} /></div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{p.description}</p>
                {p.tags && p.tags.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full border border-ink-line px-3 py-1 text-xs text-mute">{t}</li>)}</ul>
                )}
                <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${p.title} (abre em nova aba)`} className="btn btn-ghost mt-6 self-start">
                  Ver projeto <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
      <div className="rise mt-12 flex justify-center" style={{ ['--d' as string]: '260ms' }}>
        <a href={moreProjectsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Ver mais projetos <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </>
  )
}

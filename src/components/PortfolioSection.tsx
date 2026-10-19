import { useRef, useState, type KeyboardEvent } from 'react'
import { Award, Code, Layers } from 'lucide-react'
import Section from './Section'
import ProjectsPanel from './ProjectsPanel'
import CertificatesPanel from './CertificatesPanel'
import SkillsPanel from './SkillsPanel'

const tabs = [
  { id: 'projetos', label: 'Projetos', icon: Code, panel: ProjectsPanel },
  { id: 'certificados', label: 'Certificados', icon: Award, panel: CertificatesPanel },
  { id: 'tecnologias', label: 'Tecnologias', icon: Layers, panel: SkillsPanel },
]

export default function PortfolioSection() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const Panel = tabs[active].panel

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const n = tabs.length
    let next = active
    if (e.key === 'ArrowRight') next = (active + 1) % n
    else if (e.key === 'ArrowLeft') next = (active - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    else return
    e.preventDefault()
    setActive(next)
    refs.current[next]?.focus()
  }

  return (
    <Section id="portfolio" title="Portfólio" intro="Projetos, certificados e as tecnologias que uso no dia a dia.">
      <div role="tablist" aria-label="Seções do portfólio" onKeyDown={onKeyDown} className="grid grid-cols-3 gap-1.5 rounded-2xl border border-ink-line bg-ink-soft/60 p-1.5">
        {tabs.map((t, i) => {
          const on = i === active
          return (
            <button
              key={t.id}
              ref={(el) => { refs.current[i] = el }}
              role="tab"
              id={`aba-${t.id}`}
              aria-selected={on}
              aria-controls={`painel-${t.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-4 text-sm font-medium transition duration-200 sm:py-5 ${
                on
                  ? 'border-violet/30 bg-gradient-to-br from-violet-deep/50 to-violet/10 text-white shadow-[0_10px_30px_-15px_rgba(139,92,246,.6)]'
                  : 'border-transparent text-mute hover:text-white'
              }`}
            >
              <t.icon size={20} className={on ? 'text-violet-light' : ''} aria-hidden="true" />
              {t.label}
            </button>
          )
        })}
      </div>

      <div key={tabs[active].id} role="tabpanel" id={`painel-${tabs[active].id}`} aria-labelledby={`aba-${tabs[active].id}`} tabIndex={0} className="mt-10">
        <Panel />
      </div>
    </Section>
  )
}

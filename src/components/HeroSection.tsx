import { ArrowDown, Sparkles } from 'lucide-react'
import { profile, heroBadges } from '../data/content'
import DevIllustration from './DevIllustration'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-sm text-violet-light" style={{ ['--d' as string]: '0ms' }}>
            <Sparkles size={14} aria-hidden="true" /> {profile.badge}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,7vw,4.75rem)] font-semibold leading-[1] tracking-tight">
            <span className="rise block" style={{ ['--d' as string]: '120ms' }}>{profile.firstLine}</span>
            <span className="rise block bg-gradient-to-r from-violet-light to-violet bg-clip-text text-transparent" style={{ ['--d' as string]: '240ms' }}>{profile.secondLine}</span>
          </h1>
          <p className="rise mt-6 max-w-lg text-lg leading-relaxed text-mute" style={{ ['--d' as string]: '360ms' }}>{profile.tagline}</p>
          <ul className="rise mt-7 flex flex-wrap gap-2.5" style={{ ['--d' as string]: '440ms' }} aria-label="Tecnologias principais">
            {heroBadges.map((b) => (
              <li key={b} className="rounded-full border border-ink-line bg-ink-soft px-4 py-2 text-sm text-white/90 transition hover:border-violet/60 hover:text-violet-light">{b}</li>
            ))}
          </ul>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ ['--d' as string]: '520ms' }}>
            <a href="#portfolio" className="btn btn-primary">Ver projetos <ArrowDown size={16} /></a>
            <a href="#contato" className="btn btn-ghost">Entrar em contato</a>
          </div>
        </div>
        <div className="rise mx-auto w-full max-w-[34rem] lg:max-w-none" style={{ ['--d' as string]: '300ms' }}>
          <DevIllustration className="h-auto w-full" />
        </div>
      </div>
    </section>
  )
}

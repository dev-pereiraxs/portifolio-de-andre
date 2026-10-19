import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <h2 id={`${id}-t`} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        {intro && <p className="mt-4 max-w-xl text-mute">{intro}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}

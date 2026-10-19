import { GraduationCap } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { education } from '../data/content'

export default function EducationSection() {
  return (
    <Section id="formacao" title="Formação">
      <ol className="relative max-w-2xl border-l border-ink-line pl-8">
        {education.map((e, i) => (
          <li key={e.title} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border border-violet/60 bg-ink text-violet-light"><GraduationCap size={17} aria-hidden="true" /></span>
            <Reveal delay={i * 90}>
              <h3 className="font-display text-2xl font-medium">{e.title}</h3>
              <p className="mt-1 text-mute">{e.school}</p>
              <p className="mt-3 inline-block rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs text-violet-light">{e.status}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

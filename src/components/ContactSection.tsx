import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import ContactForm from './ContactForm'
import { socials } from '../data/content'

export default function ContactSection() {
  const [github, linkedin, instagram] = socials
  const LinkedinIcon = linkedin.icon
  return (
    <Section id="contato" title="Vamos conversar" intro="Conte sobre o seu projeto, uma oportunidade ou uma ideia. Sua mensagem chega direto na minha caixa de e-mail.">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <div className="h-full rounded-3xl border border-ink-line bg-gradient-to-br from-violet-deep/20 via-ink-soft to-ink-soft p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="h-full rounded-3xl border border-ink-line bg-ink-soft p-6 sm:p-8">
            <h3 className="flex items-center gap-3 font-display text-2xl font-medium">
              <span className="h-0.5 w-8 rounded bg-violet" aria-hidden="true" /> Fale comigo
            </h3>
            <div className="mt-6 space-y-3">
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-ink-line bg-ink/60 p-4 transition hover:border-violet/60">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${linkedin.color}22`, color: linkedin.color }}><LinkedinIcon size={20} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">Vamos nos conectar</span>
                  <span className="block truncate text-sm text-mute">{linkedin.handle}</span>
                </span>
                <ArrowUpRight size={18} className="shrink-0 text-mute transition group-hover:text-violet-light" aria-hidden="true" />
              </a>
              <div className="grid gap-3 sm:grid-cols-2">
                {[instagram, github].map(({ label, href, icon: Icon, handle, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-ink-line bg-ink/60 p-4 transition hover:border-violet/60">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}22`, color }}><Icon size={18} aria-hidden="true" /></span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="block truncate text-xs text-mute">{handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

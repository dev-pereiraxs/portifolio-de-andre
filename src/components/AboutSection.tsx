import { Download } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import PhotoCard from './PhotoCard'
import { profile } from '../data/content'

export default function AboutSection() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <Reveal>
          <PhotoCard />
        </Reveal>
        <Reveal delay={100}>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-mute">
            <p>
              Meu nome é <span className="text-white">{profile.name}</span>, tenho {profile.age} anos e me interesso por
              transformar ideias em software. Atuo na área de Engenharia de Software e desenvolvimento de software.
            </p>
            <p>
              Sou formado como Técnico em Informática pelo <span className="text-white">SENAC</span> e em Gestão da
              Tecnologia da Informação pela <span className="text-white">UniCesumar</span>. Essa combinação me dá uma
              visão que vai do código ao contexto em que ele será usado.
            </p>
          </div>
          <a
            href="./curriculo-andre-luiz-matos-pereira.pdf"
            download="Curriculo-Andre-Luiz-Matos-Pereira.pdf"
            className="btn btn-primary mt-9"
          >
            <Download size={16} aria-hidden="true" /> Baixar currículo
          </a>
        </Reveal>
      </div>
    </Section>
  )
}

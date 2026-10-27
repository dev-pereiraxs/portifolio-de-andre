import type { IconType } from 'react-icons'
import { FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaLinkedinIn, FaInstagram, FaServer, FaLinux, FaNetworkWired, FaExchangeAlt } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiCplusplus, SiMysql, SiFlask } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { Project } from './content'

// Tudo que aparece no site está aqui. Edite este arquivo para atualizar o portfólio.

export const profile = {
  name: 'André Luiz Matos Pereira',
  firstLine: 'Desenvolvedor',
  secondLine: 'Full-stack',
  badge: 'Engenharia de Software',
  age: 20,
  role: 'Engenharia de Software | Desenvolvimento de Software',
  tagline: 'Transformo ideias em software que funciona, do primeiro rascunho até a tela do usuário.',
}

// Badges de tecnologias exibidas no início
export const heroBadges = ['React', 'JavaScript', 'Node.js', 'Tailwind CSS']

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
]

export const socials: { label: string; href: string; icon: IconType; handle: string; color: string }[] = [
  { label: 'GitHub', href: 'https://github.com/dev-pereiraxs', icon: FaGithub, handle: '@dev-pereiraxs', color: '#E4E4E7' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andr%C3%A9-luiz-matos-pereira-633244282/', icon: FaLinkedinIn, handle: 'André Luiz Matos Pereira', color: '#4C9AE6' },
  { label: 'Instagram', href: 'https://www.instagram.com/_pereiraxs.a/', icon: FaInstagram, handle: '@_pereiraxs.a', color: '#E1306C' },
]

// Mensagens do formulário de contato chegam neste e-mail, via FormSubmit (https://formsubmit.co).
// No primeiro envio, o FormSubmit manda um e-mail de ativação para este endereço: clique no link para ativar.
export const contactEmail = 'andre.lmpereira1205@gmail.com'
export const formEndpoint = `https://formsubmit.co/ajax/${contactEmail}`

export const skills: { group: string; items: { name: string; icon: IconType; color: string }[] }[] = [
  {
    group: 'Front-end',
    items: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    group: 'Back-end',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Java', icon: FaJava, color: '#F89820' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
      { name: 'APIs REST', icon: FaExchangeAlt, color: '#A78BFA' },
    ],
  },
  { group: 'Banco de dados', items: [{ name: 'MySQL', icon: SiMysql, color: '#4479A1' }] },
  {
    group: 'Ferramentas',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
      { name: 'VS Code', icon: VscVscode, color: '#2F9AE8' },
      { name: 'XAMPP', icon: FaServer, color: '#FB7A24' },
    ],
  },
  {
    group: 'Sistemas e redes',
    items: [
      { name: 'Linux', icon: FaLinux, color: '#FCC624' },
      { name: 'Redes de Computadores', icon: FaNetworkWired, color: '#38BDF8' },
    ],
  },
]

export type Project = {
  title: string
  description: string
  url: string
  image?: string // arquivos em /public/projects/
  tags?: string[] // só preencha o que puder confirmar
}




// Botão "Ver mais projetos": abre a lista de repositórios do seu GitHub.
export const moreProjectsUrl = 'https://github.com/dev-pereiraxs?tab=repositories'

export type Certificate = {
  kind: 'Diploma' | 'Certificado'
  title: string
  issuer: string
  year: string
  image?: string // imagens em /public/certificates/
}

export const certificates: Certificate[] = [
  { kind: 'Diploma', title: 'Técnico em Informática', issuer: 'Senac Tatuapé', year: '2026', image: './certificates/diploma-tecnico-informatica.webp' },
  { kind: 'Certificado', title: 'Assistente de Suporte e Manutenção de Computadores', issuer: 'Senac Tatuapé', year: '2025', image: './certificates/suporte-manutencao-computadores.webp' },
  { kind: 'Certificado', title: 'Assistente de Operação de Redes de Computadores', issuer: 'Senac Tatuapé', year: '2025', image: './certificates/operacao-redes-computadores.webp' },
  { kind: 'Certificado', title: 'Assistente de Desenvolvimento de Aplicativos Computacionais', issuer: 'Senac Tatuapé', year: '2026', image: './certificates/desenvolvimento-aplicativos.webp' },
  { kind: 'Certificado', title: 'Computação em Nuvem', issuer: 'Senac Penha', year: '2022', image: './certificates/computacao-em-nuvem.webp' },
  { kind: 'Certificado', title: 'Introdução à Lógica de Programação', issuer: 'Udemy · Neps Academy', year: '2021', image: './certificates/logica-programacao-udemy.webp' },
]

export const education = [
  { title: 'Técnico em Informática', school: 'SENAC', status: 'Formado' },
  { title: 'Gestão da Tecnologia da Informação', school: 'UniCesumar', status: 'Formado' },
]

export const footerPhrase = 'Código limpo é uma forma de respeito por quem vai ler depois.'export const projects: Project[] = [
    {
        title: 'Radical Music',
        description: 'Loja virtual de instrumentos musicais com cadastro e login, catálogo com busca e filtros, carrinho, pedidos, painel de estoque e pagamento em ambiente de teste.',
        url: 'https://radical-music.onrender.com',
        image: './projects/radical-music.webp',
        tags: ['React', 'Python (Flask)', 'MySQL'],
    },

    {
        title: 'Serviço Fácil',
        description: 'Projeto integrador publicado online, desenvolvido durante a formação.',
        url: 'https://projeto-integrador-h7m7.onrender.com/',
        image: '/projects/projeto-integrador.webp',
        tags: ['Python', 'Flask', 'JavaScript', 'CSS'],
    },

    {
        title: 'Spider',
        description: 'Fã-clube do Homem-Aranha com curiosidades sobre o herói, trailer, filme e os atores que o interpretaram.',
        url: 'https://dev-pereiraxs.github.io/Spider/',
        image: './projects/spider.webp',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Doceria Vasconcelos',
        description: 'Site de uma confeitaria caseira, com apresentação da confeiteira e catálogo de produtos.',
        url: 'https://dev-pereiraxs.github.io/doceria_vasconcelos/',
        image: './projects/doceria-vasconcelos.webp',
        tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
];


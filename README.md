# Portfólio de André Luiz Matos Pereira

Portfólio pessoal de **André Luiz Matos Pereira**, desenvolvedor full-stack em formação e profissional da área de Engenharia de Software. O site reúne projetos, certificados, tecnologias, formação e um formulário de contato, tudo em uma única página, com identidade visual própria em **preto, branco e roxo**.

**Site publicado:** https://dev-pereiraxs.github.io/portifolio-de-andre/

---

## O que você encontra no site

**Início**
Título "Desenvolvedor Full-stack", frase de apresentação, badges das tecnologias principais (React, JavaScript, Node.js e Tailwind CSS) e uma ilustração em SVG, desenhada para este projeto, com etiquetas de código que flutuam e um cursor que pisca.

**Sobre mim**
Apresentação em primeira pessoa, botão para baixar o currículo em PDF e um card circular flutuante com a foto. A foto foi recortada do cenário original e fica dentro de um círculo translúcido com borda roxa em degradê.

**Portfólio (três abas)**
- **Projetos:** cards com capa, descrição e link para cada aplicação (Serviço Fácil, Spider e Doceria Vasconcelos), mais o botão "Ver mais projetos", que leva à lista de repositórios do GitHub.
- **Certificados:** o diploma de Técnico em Informática e cinco certificados (Suporte e Manutenção de Computadores, Operação de Redes, Desenvolvimento de Aplicativos Computacionais, Computação em Nuvem e Introdução à Lógica de Programação). Ao clicar, o documento abre em tamanho maior.
- **Tecnologias:** cards com ícone e nome, agrupados em Front-end, Back-end, Banco de dados, Ferramentas e Sistemas e redes.

**Formação**
Linha do tempo com a formação acadêmica.

**Contato**
Formulário cujas mensagens chegam direto na caixa de e-mail do autor, e um card "Fale comigo" com LinkedIn, Instagram e GitHub.

---

## Tecnologias usadas na construção

| Camada | Ferramentas |
| --- | --- |
| Interface | React 18, TypeScript |
| Build | Vite |
| Estilo | Tailwind CSS 3 |
| Ícones | Lucide React, React Icons |
| Fontes | Bricolage Grotesque e Inter, instaladas via `@fontsource` (sem depender de serviço externo) |
| Formulário | FormSubmit (envio por e-mail, sem servidor próprio) |
| Hospedagem | GitHub Pages, com publicação automática por GitHub Actions |

### Cuidados com qualidade
- Layout responsivo para celular, tablet e desktop.
- Abas acessíveis, com navegação pelas setas do teclado e indicação de foco visível.
- Animações discretas, que são desligadas para quem prefere movimento reduzido.
- Imagens convertidas para WebP, com carregamento sob demanda.
- Metadados básicos de SEO e HTML semântico.
- Textos, projetos, tecnologias e links concentrados em um único arquivo, para editar sem mexer nos componentes.

---

## Estrutura do projeto

```
portfolio-andre/
├── .github/workflows/deploy.yml   # publicação automática no GitHub Pages
├── public/
│   ├── andre-card.webp            # foto do card (fundo transparente)
│   ├── curriculo-andre-luiz-matos-pereira.pdf
│   ├── certificates/              # imagens dos certificados
│   └── projects/                  # capas dos projetos
├── src/
│   ├── data/content.ts            # todo o conteúdo editável do site
│   ├── components/
│   │   ├── Navbar, HeroSection, DevIllustration
│   │   ├── AboutSection, PhotoCard
│   │   ├── PortfolioSection (abas) + ProjectsPanel, CertificatesPanel, SkillsPanel
│   │   ├── EducationSection
│   │   ├── ContactSection, ContactForm
│   │   └── Footer, Section, Reveal
│   ├── index.css                  # estilos e animações
│   └── main.tsx
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

---

## Como rodar no computador

Requer **Node.js 18 ou superior**.

```bash
npm install
npm run dev       # abre em http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # testa o build
```

## Como editar o conteúdo

Abra `src/data/content.ts`. Nele ficam os textos do início, o menu, os links das redes sociais, as tecnologias, os projetos, os certificados, a formação e a frase do rodapé.

**Adicionar um projeto:** salve a capa em `public/projects/` e acrescente um item à lista `projects`.

**Adicionar um certificado:** salve a imagem em `public/certificates/` e acrescente um item à lista `certificates`:

```ts
{ kind: 'Certificado', title: 'Nome do curso', issuer: 'Instituição', year: '2026', image: './certificates/arquivo.webp' }
```

Antes de publicar documentos, cubra dados pessoais sensíveis, como o número do RG.

**Trocar a foto:** substitua `public/andre-card.webp`, mantendo a proporção quadrada e o fundo transparente.

---

## Formulário de contato

As mensagens são enviadas pelo [FormSubmit](https://formsubmit.co) para o e-mail definido em `contactEmail`, no arquivo `src/data/content.ts`.

**Ativação, uma única vez:**
1. Com o site publicado, envie uma mensagem de teste pelo formulário.
2. O FormSubmit manda um e-mail de ativação para a caixa de entrada configurada (veja também o spam).
3. Clique em **Activate Form**. A partir daí, cada mensagem chega no e-mail, e o endereço do visitante vira o destinatário da resposta.

Se o FormSubmit fornecer um código aleatório, troque `formEndpoint` por `https://formsubmit.co/ajax/SEU_CODIGO` para não deixar o e-mail visível no código do site.

---

## Publicação

O arquivo `.github/workflows/deploy.yml` compila e publica o site a cada envio para a branch `main`.

1. No repositório, abra **Settings → Pages** e, em **Source**, escolha **GitHub Actions**.
2. Envie as alterações:
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push
   ```
3. Acompanhe na aba **Actions**. Quando a execução ficar verde, o site está atualizado.

O projeto também funciona na Vercel: importe o repositório e clique em **Deploy**, sem nenhuma configuração extra.

---

## Como o projeto foi construído

1. **Base:** estrutura em React, TypeScript, Tailwind e Vite, com paleta preta, branca e roxa, navegação fixa com menu móvel e rolagem suave.
2. **Início:** título e badges, depois uma ilustração animada em SVG.
3. **Sobre mim:** texto, currículo para download e card circular flutuante. A foto passou por recorte de fundo com OpenCV (GrabCut, filtro guiado e limpeza de cor nas bordas) para o contorno ficar liso.
4. **Portfólio em abas:** união das seções de projetos e tecnologias, com a nova aba de certificados.
5. **Certificados:** seis documentos escaneados, endireitados, limpos da marca do aplicativo de digitalização, otimizados e com o número do RG coberto.
6. **Contato:** formulário com entrega por e-mail e card de redes sociais.
7. **Hospedagem:** publicação automática no GitHub Pages por GitHub Actions.

## Ideias para o futuro

- Seção de comentários dos visitantes (por exemplo, com Giscus, que usa o próprio GitHub).
- Efeito de texto sendo digitado no início.
- Domínio próprio.
- Certificados adicionais (Python, Web Designer) e mais projetos na aba Projetos.

---

## Contato

- GitHub: [dev-pereiraxs](https://github.com/dev-pereiraxs)
- LinkedIn: [André Luiz Matos Pereira](https://www.linkedin.com/in/andr%C3%A9-luiz-matos-pereira-633244282/)
- Instagram: [@_pereiraxs.a](https://www.instagram.com/_pereiraxs.a/)

© André Luiz Matos Pereira. Todos os direitos reservados.

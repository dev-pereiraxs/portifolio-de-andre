# Portfólio — André Luiz Matos Pereira

React + TypeScript + Tailwind CSS + Vite.

## Rodar localmente
Requer Node.js 18 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```

## Editar conteúdo
Tudo (textos, projetos, tecnologias, links, formação) fica em `src/data/content.ts`.

### Imagens dos projetos
As capas ficam em `public/projects/`. Para trocar uma, substitua o arquivo mantendo o nome (ou altere o campo `image` em `src/data/content.ts`).

### Certificados
A aba Certificados lê a lista `certificates` em `src/data/content.ts`. Para adicionar um:
1. Salve a imagem em `public/certificates/` (ex.: `python-udemy.webp`).
2. Adicione `{ kind: 'Certificado', title: 'Nome do curso', issuer: 'Instituição', year: '2026', image: './certificates/python-udemy.webp' }` à lista.
Nos documentos do Senac, o número do RG foi coberto com uma tarja antes de publicar. Faça o mesmo ao adicionar novos.
Itens sem `image` aparecem com um ícone no lugar da imagem. Ao clicar no certificado, a imagem abre em tamanho maior em nova aba.

### Formulário de contato (mensagens no seu e-mail)
O formulário usa o FormSubmit (gratuito, sem servidor) e envia as mensagens para `contactEmail`, em `src/data/content.ts`.
1. Publique o site (Vercel ou GitHub Pages) e envie uma mensagem de teste pelo formulário. Pelo `localhost` também funciona, mas não abrindo o arquivo direto no navegador.
2. O FormSubmit manda um e-mail de ativação para o seu Gmail. Abra e clique em **Activate Form** (olhe também o spam).
3. Pronto: dali em diante cada mensagem chega no seu e-mail, com o e-mail do visitante como resposta.
Se o FormSubmit entregar um código aleatório no lugar do e-mail, troque `formEndpoint` por `https://formsubmit.co/ajax/SEU_CODIGO`. Isso evita deixar o seu e-mail visível no código do site.

### Botão "Ver mais projetos"
Abre a lista de repositórios do seu GitHub. O endereço fica em `moreProjectsUrl`, no mesmo arquivo.

## Publicar

### Vercel
1. Suba a pasta para um repositório no GitHub.
2. Em vercel.com, escolha **Add New → Project** e importe o repositório.
3. Vite é detectado sozinho. Clique em **Deploy**.

### GitHub Pages
1. Suba a pasta para um repositório no GitHub.
2. Rode `npm run build`.
3. Publique o conteúdo de `dist/` (por exemplo com `npx gh-pages -d dist`) e ative o Pages na branch `gh-pages`.
O `base: './'` no `vite.config.ts` já deixa os caminhos compatíveis.

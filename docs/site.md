# Devmove — Descrição do Site

O Devmove é um grupo de desenvolvedores com objetivo de lançar ferramentas incríveis e sem rastreadores.

## Público

- Desenvolvedores
- Pessoas em busca de ferramentas para faciliar o seu dia a dia.
- Curiosos

## Tom e estilo

Direto, acolhedor e sem jargão desnecessário. O site evita promessas grandes e
prefere mostrar o que já existe, mesmo que pequeno, e o que vem a seguir.

### UI

Visual moderno, utiliza o padrão de design do gnome adwaita dark (cor de accent Roxo).
Fundo com quadriculado leve e que se mexe ao passar o mouse através da página.
Smooth scrolling.

## Estrutura de páginas

O site começa enxuto:

1. **Início (`/`)** — porta de entrada. Apresenta o Devmove em poucas frases e
   direciona para as demais seções. Ver `pages/inicio.md`.
2. **Sobre (`/sobre`)** — conta o que é o Devmove, sua missão e como funciona.
   Ver `pages/sobre.md`.
3. **Projetos (`/projetos`)** — vitrine do que estamos construindo ou incubando.
   Ver `pages/projetos.md`.


## Navegação

Todas as páginas compartilham o mesmo cabeçalho e rodapé.

### Cabeçalho

Em ordem da esquerda para direita:

1. Logo Devmove à esquerda,
2. Links para as páginas à direita:
   1. Início
   2. Projetos
   3. Sobre
3. Seletor de idioma.

### Rodapé

Rodapé simples com ano e menção ao Astro e Github do Devmove (https://github.com/Devmove).

## Seletor de idioma

Deve ter um diretório para adicionar as traduções da página em formato json i18n.

## Sistema de busca

Sistema de busca simples na dobra "Ferramentas e aplicativos", para filtrar por nome e tipo.

Para detalhes do conteúdo esperado em cada página, leia os arquivos em `docs/pages/`.

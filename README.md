# Devmove — site principal

Site estático do Devmove feito com [Astro](https://astro.build/), pensado para hospedagem gratuita no **GitHub Pages**.

## Desenvolvimento

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

## Deploy

O deploy é automático via `.github/workflows/deploy.yml` a cada push na branch `main`.

Antes de publicar, ajuste em `astro.config.mjs`:

- `site`: URL final (ex.: `https://<usuario>.github.io/devmovesite/`)
- `base`: `/devmovesite/` para Project Pages, ou `/` para User/Org Pages

Ative em Settings → Pages → Source: **GitHub Actions**.

## Documentação do conteúdo

Ver `docs/site.md` para a visão geral do site e `docs/pages/` para o descritivo de cada página.

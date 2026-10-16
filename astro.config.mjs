import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/guides/deploy/github/
// Ajuste `site` para a URL final do GitHub Pages.
// Se for Project Pages: https://<usuario-ou-org>.github.io/devmovesite/
// Se for User/Org Pages (<usuario>.github.io): use site `https://<usuario>.github.io/` e base `'/'`.
export default defineConfig({
  site: 'https://devmove.dev/',
  base: '/',
  output: 'static',
});

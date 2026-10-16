---
title: "Construindo o Companion for Kimai: um timer rápido sem fricção"
description: "Como transformamos o atrito de registrar horas no Kimai em uma barra de Quick Timer, popup produtivo e temas que respeitam o sistema."
date: 2026-10-10
lang: pt
tags: ["Kimai", "Browser extension", "Firefox", "Chrome", "JavaScript"]
project: "Companion for Kimai"
repo: "https://github.com/mblithium/companion-for-kimai"
---

Quem usa o [Kimai](https://www.kimai.org/) todo dia conhece o ritual: abrir o timesheet, procurar o botão de play lá no topo, preencher cliente, projeto, atividade, descrição, tags... e torcer para não esquecer de parar o timer no fim.

O **Companion for Kimai** nasceu para remover essa fricção. É uma extensão não-oficial para Chrome e Firefox que coloca o essencial onde seus olhos já estão: logo acima dos registros.

## O problema era navegação, não falta de recurso

O Kimai já faz tudo. O problema era alcance. O botão de iniciar ficava longe do contexto, e retomar o trabalho de ontem exigia recriar a entrada do zero.

Decidimos então:

- **Quick Timer acima dos registros** — descrição com `Enter` para iniciar, `Shift+Enter` para quebrar linha.
- **Busca digitável** em cliente, projeto, atividade e tags. `Enter` confirma, `Esc` reverte.
- **Widget "Now"** mostrando o timer rodando com duração ao vivo.
- **Agrupamento de entradas** com edição inline, sem parar o timer.

## Popup pensado para continuar, não só começar

O popup não é um atalho para o site. Ele responde a três perguntas rápidas:

1. O que estou fazendo agora?
2. O que eu estava fazendo hoje mais cedo?
3. O que costumo reutilizar?

Por isso ele permite iniciar timers, **continuar o trabalho de hoje** e **reutilizar entradas recentes** em dois cliques. Atalhos de teclado (`Alt+Shift+P/S/K`) cobrem iniciar o timer padrão, parar e abrir o popup.

## Temas, privacidade e Manifest V3

Três decisões guiaram a arquitetura:

- **7 temas incluindo GNOME/Adwaita**, com claro/escuro seguindo o sistema. Tempo registrado também é conforto visual.
- **Login com API key, só no seu dispositivo.** Sem rastreadores, sem coleta. O tráfego é estritamente entre a extensão e a sua instalação do Kimai.
- **Manifest V3 sem background worker.** Tudo roda em popup, página de opções e content scripts. O Chrome exige `background.service_worker` e o Firefox usa `background.scripts` — mantemos as duas variantes sincronizadas e um teste `check-pages` garante que só diferem nisso.

Para desenvolvimento, não há build:

```sh
npm test          # testes funcionais
npm run check     # sintaxe, integração e contraste
npm run build     # checagens + ZIPs de produção em dist/
```

O `npm run build` gera `companion-for-kimai-chrome-<versão>.zip` e `companion-for-kimai-firefox-<versão>.zip`, cada um só com os arquivos referenciados pelo manifest. Se versões divergirem ou faltar arquivo, o build falha de propósito.

## O que aprendemos

1. **Padrão do Kimai primeiro, extensão depois.** Testamos contra o demo oficial (`demo.kimai.org`, Kimai 2.68.0) com sessão logada antes de otimizar.
2. **Permissões mínimas.** Só `storage` + permissão opcional de host pedida apenas para o host configurado. No Firefox, `cookies` para abrir o Kimai no mesmo container; no Chrome, o build sai sem ele.
3. **CI que publica.** Pushes na `main`, PRs e tags `v*` geram os dois ZIPs como artefatos por 30 dias. Tag `v*` precisa bater com o `package.json` e cria Release com changelog.

## Próximos passos

- Melhorar o agrupamento por semana para quem fecha ponto na sexta.
- Sincronizar preferências de tema entre popup e content script sem reload.
- Documentar o fluxo de publicação na AMO e Chrome Web Store.

O código é aberto e auditável em [mblithium/companion-for-kimai](https://github.com/mblithium/companion-for-kimai). Se você registra horas no Kimai, testa e abre uma issue — bug ou ideia, os dois ajudam.

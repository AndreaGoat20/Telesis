# Telesis Magazine

Sito della rivista studentesca **Telesis Magazine** ([@magazine.telesis](https://www.instagram.com/magazine.telesis)).

Stack: **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**. I contenuti sono file Markdown con frontmatter, letti a build/request time dal filesystem (nessun database o CMS esterno).

## Comandi

```bash
npm install   # installa le dipendenze
npm run dev   # avvia il server di sviluppo su http://localhost:3000
npm run build # build di produzione
npm run start # avvia la build di produzione
```

## Struttura del progetto

```
app/                    Pagine (App Router)
  page.tsx              Home
  archivio/page.tsx      Archivio con ricerca e filtri
  archivio/[slug]/       Pagina di dettaglio articolo
  collaborazioni-eventi/page.tsx   Pagina Collaborazioni & Eventi (non collegata nel menu)
components/             Componenti React condivisi (Navbar, ArticleCard, ...)
lib/                    Funzioni per leggere e parsare i contenuti Markdown
content/
  articoli/*.md         Articoli della rivista
```

## Come aggiungere un nuovo articolo

Crea un file `content/articoli/nome-slug-articolo.md`. Il nome del file (senza `.md`) diventa l'URL dell'articolo, es. `/archivio/nome-slug-articolo`.

```markdown
---
title: "Titolo dell'articolo"
subtitle: "Sottotitolo o sommario breve"
date: "2026-09-01"       # formato AAAA-MM-GG, usato anche per l'ordinamento
author: "Nome Cognome"
category: "Storia"        # Storia, Geopolitica o Economia: compare automaticamente nei filtri
cover: "https://..."      # URL dell'immagine di copertina
readingTime: 6             # tempo di lettura stimato, in minuti
excerpt: "Riassunto breve mostrato nelle card"
---

Corpo dell'articolo in **Markdown**.

## Un sottotitolo

Altro paragrafo...
```

Gli articoli vengono ordinati automaticamente dal più recente al più vecchio in base al campo `date`.

### Immagini di copertina

Nella versione dimostrativa le immagini usano URL esterni di placeholder (`picsum.photos`, `i.pravatar.cc`). In produzione:

- puoi continuare a usare URL esterni (aggiungi il dominio a `images.remotePatterns` in `next.config.js`), oppure
- puoi mettere i file in `public/images/articoli/` e riferirli come `/images/articoli/nome-file.jpg` nel frontmatter `cover`.

## Pagina Collaborazioni & Eventi

`/collaborazioni-eventi` esiste ma non compare nel menu di navigazione né in nessun link del sito: è raggiungibile solo digitando l'URL direttamente. Contiene per ora un placeholder ("Presto novità") — sostituiscine il contenuto in `app/collaborazioni-eventi/page.tsx` quando saranno definite le prime collaborazioni ed eventi.

## CMS (Decap CMS)

Il pannello di gestione contenuti è su `/admin`, non collegato in nessun menu del sito, protetto da Netlify Identity (accesso solo su invito). Da lì si possono creare, modificare ed eliminare gli articoli; la configurazione dei campi è in `public/admin/config.yml`.

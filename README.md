# Edgemony react router

## Dependencies:

installare le dependencies usando il save, per evitare di avere dipenzenze ambigue all'interno del progetto.

```bash

npm install --save [lib]
npm install -D [lib] #dev dependencies

# or

yarn add [lib]
yarn add -D [lib]

```

## Esercizio:

- Scrivere il router seguendo il metodo `createBrowserRouter` della versione 6.4;
- aggiungere loader per ogni rotta che richiede dati al server;
- usare navigate per spostarsi dalle rotte "morte" come "/catalogo" o la index della ricetta;

## Todo:

- loading con Suspense [ok]
- Lazy loading dinamico 
- useSearchParams
- props nei link, useLocation
- Route guards

## Interessante da guardare

- Lazy loading https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
- Lazy loading in reac https://reactjs.org/docs/code-splitting.html
- Metriche su performance: https://www.cloudflare.com/it-it/learning/performance/more/website-performance-conversion-rates/
- Skeleton in react https://skeletonreact.com/
- Controllare onload img per caricamento figo immagini

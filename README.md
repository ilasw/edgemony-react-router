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

- usare `useSearchParams` per implementare una paginazione in `Home` che abbia i pulsanti "Prev" e "Next";
- Inserire nella pagina `Recipe` il componente in versione lazy;
- Mettere in almeno una pagina il loading del data di `loader` usando Suspense e Await;
- (opt) Usare state nei link, per stampare in log la pagina di provenienza;
- (opt) provare ad implementare delle Route guards;

## Todo:

- useSearchParams [ok]
- loading con Suspense [ok] Await
- Lazy loading dinamico [ok] React.lazy
- state nei link, useLocation [ok]
- Route guards [ok]

## Interessante da guardare

- Lazy loading https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
- Lazy loading in reac https://reactjs.org/docs/code-splitting.html
- Metriche su performance: https://www.cloudflare.com/it-it/learning/performance/more/website-performance-conversion-rates/
- Skeleton in react https://skeletonreact.com/
- Controllare onload img per caricamento figo immagini
- Tree shaking: https://en.wikipedia.org/wiki/Tree_shaking
- Bundlephobia: https://bundlephobia.com/
- [withAuth]
- JWT per l'authentication

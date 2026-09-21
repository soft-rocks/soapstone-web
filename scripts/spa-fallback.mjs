// GitHub Pages has no rewrite rules, so an unprerendered route such as
// /sentences/<id> falls through to 404.html. Nuxt already emits 200.html as the
// SPA shell; copying it over 404.html lets the client router take over while the
// response keeps its 404 status.
import { copyFile } from 'node:fs/promises';

const dir = '.output/public';
await copyFile(`${dir}/200.html`, `${dir}/404.html`);
console.log('spa-fallback: 200.html -> 404.html');

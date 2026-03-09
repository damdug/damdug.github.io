import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DkQ011Ef.mjs';
import { manifest } from './manifest_BkFuMUuC.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/subscribe.astro.mjs');
const _page3 = () => import('./pages/api/verify.astro.mjs');
const _page4 = () => import('./pages/confirm.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/hdk.astro.mjs');
const _page7 = () => import('./pages/notes/_slug_.astro.mjs');
const _page8 = () => import('./pages/notes.astro.mjs');
const _page9 = () => import('./pages/one-rule.astro.mjs');
const _page10 = () => import('./pages/resources.astro.mjs');
const _page11 = () => import('./pages/work-with-me.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/subscribe.ts", _page2],
    ["src/pages/api/verify.ts", _page3],
    ["src/pages/confirm.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/hdk.astro", _page6],
    ["src/pages/notes/[slug].astro", _page7],
    ["src/pages/notes/index.astro", _page8],
    ["src/pages/one-rule.astro", _page9],
    ["src/pages/resources.astro", _page10],
    ["src/pages/work-with-me.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "09662dc5-0a25-484a-b0c7-ed4f70a03631",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

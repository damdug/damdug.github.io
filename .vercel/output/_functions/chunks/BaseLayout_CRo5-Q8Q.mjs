import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, j as renderHead, d as renderSlot } from './astro/server_D2NiA7f1.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://damdug.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navItems = [
    { href: "/notes", label: "Notes" },
    { href: "/hdk", label: "HDK" },
    { href: "/resources", label: "Resources" },
    { href: "/work-with-me", label: "Work With Me" },
    { href: "/about", label: "About" }
  ];
  const current = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav> <ul style="list-style: none; display: flex; gap: var(--space-lg); flex-wrap: wrap; align-items: center;"> ${navItems.map((item) => {
    const isActive = current.startsWith(item.href);
    const color = isActive ? "var(--accent)" : "var(--text-tertiary)";
    return renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase; color: ${color}; transition: color 0.15s;`, "style")}> ${item.label} </a> </li>`;
  })} </ul> </nav>`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header style="border-bottom: 1px solid var(--border); padding: var(--space-md) 0;"> <div class="container--wide" style="display: flex; justify-content: space-between; align-items: center; padding: 0 var(--space-lg); max-width: var(--max-width-wide); margin: 0 auto;"> <a href="/" style="font-size: 0.875rem; font-weight: 500; letter-spacing: 0.06em;">
DMG<span style="color: var(--accent);">_</span> </a> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </header>`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer style="border-top: 1px solid var(--border); padding: var(--space-lg) 0; margin-top: var(--space-2xl);"> <div style="max-width: var(--max-width-wide); margin: 0 auto; padding: 0 var(--space-lg); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md);"> <span style="font-size: 0.75rem; color: var(--text-tertiary);">© ${year} Douglas M. Galloway</span> <span style="font-size: 0.75rem; color: var(--text-tertiary);"> <a href="https://www.buymeacoffee.com/damdug" target="_blank" rel="noopener" style="color: var(--text-tertiary);">Buy me a coffee ☕</a> </span> </div> </footer>`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://damdug.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Douglas M. Galloway \u2014 Systems thinker. Builder. Coach." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title} — DMG</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main>${renderSlot($$result, $$slots["default"])}</main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };

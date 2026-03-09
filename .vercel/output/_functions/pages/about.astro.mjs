import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D2NiA7f1.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CRo5-Q8Q.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container section"> <h1>Douglas M. Galloway</h1> <p class="label" style="margin-top: var(--space-sm); margin-bottom: var(--space-2xl);">Intelligence Architect · Co-Founder, Esoteria · Baja California</p> <div style="max-width: 65ch; display: flex; flex-direction: column; gap: var(--space-lg);"> <p>I build systems. For organizations, for teams, for myself. The approach is the same — understand the structure before changing it, build the practice before expecting the outcome, iterate from evidence rather than assumption. This applies whether the system is personal (how you spend your time, make decisions, show up in your work) or organizational (governance design, decision logic, intelligence infrastructure).</p> <p>I co-founded Esoteria in Baja California. We build intelligence infrastructure for mission-driven organizations — the structural layer that converts fragmented data into governed, repeatable decision logic. The work grew from years of practice in a region where the gap between organizational ambition and organizational capacity is immediate and visible.</p> <p>The HDK — Human Development Kit — is a personal framework I built over years of practice. I made it public because the methodology is worth sharing. It's not a self-help book. It's a practitioner's field manual for people who want to design their lives with the same rigor they'd bring to building anything else that matters.</p> <hr> <div> <h3 style="margin-bottom: var(--space-md);">Current Work</h3> <p>At any given time I'm running several things in parallel — some organizational, some personal, some creative, some technical. The throughline is the same across all of it: understand the system before changing it, build the practice before expecting the outcome, iterate from evidence rather than assumption.</p> <p style="margin-top: var(--space-md);">I'm selective about who I work with — not out of scarcity, but because the work only lands when there's genuine alignment. Details on the Work With Me page.</p> </div> <hr> <div> <h3 style="margin-bottom: var(--space-md);">Outside the work</h3> <p>I'm based in Baja California. I climb, make electronic music, and spend time outdoors when possible. These aren't separate from the work — they're where a lot of it gets tested. A system that only works at a desk isn't much of a system.</p> </div> <hr> <div> <h3 style="margin-bottom: var(--space-md);">Elsewhere</h3> <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: var(--space-sm);"> <li><a href="https://esoteriaai.com" target="_blank" rel="noopener" style="color: var(--accent);">Esoteria →</a></li> <li><a href="https://github.com/damdug" target="_blank" rel="noopener" style="color: var(--accent);">GitHub →</a></li> </ul> </div> </div> </article> ` })}`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/about.astro", void 0);

const $$file = "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

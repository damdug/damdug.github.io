import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D2NiA7f1.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CRo5-Q8Q.mjs';
import { $ as $$SignupForm } from '../chunks/SignupForm_DXiTqlCO.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <p class="label" style="margin-bottom: var(--space-md);">DOUGLAS M. GALLOWAY</p> <h1 class="cursor">Systems over shortcuts.</h1> <p style="margin-top: var(--space-lg); max-width: 60ch;">
I build systems — for organizations, for teams, for myself. This is where I think out loud about what that looks like in practice.
</p> <p style="margin-top: var(--space-md); color: var(--text-tertiary);">Process. Design. Execution. One approach.</p> </div> </section> <section class="section" style="background: var(--bg-surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin: var(--space-2xl) 0;"> <div class="container"> <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg);"> <a href="/hdk" class="card" style="display: block;"> <h3 style="margin-bottom: var(--space-sm);">HDK</h3> <p style="font-size: 0.875rem;">A free framework for designing your personal operating system. Built from practice. Yours to use.</p> </a> <a href="/work-with-me" class="card" style="display: block;"> <h3 style="margin-bottom: var(--space-sm);">Work With Me</h3> <p style="font-size: 0.875rem;">
I work best with people who are genuinely ready to examine their system. The engagements are collaborative by design.
</p> </a> <a href="/notes" class="card" style="display: block;"> <h3 style="margin-bottom: var(--space-sm);">Notes</h3> <p style="font-size: 0.875rem;">Observations from practice across life, business, technology, and creativity.</p> </a> </div> </div> </section> <section class="section"> <div class="container" style="max-width: 600px;"> <p style="margin-bottom: var(--space-lg); font-size: 0.9375rem;">
Free access to everything I've built. The HDK. The One Rule framework. One signup.
</p> ${renderComponent($$result2, "SignupForm", $$SignupForm, { "buttonText": "Get Access", "placeholder": "your@email.com", "label": "" })} </div> </section> ` })}`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

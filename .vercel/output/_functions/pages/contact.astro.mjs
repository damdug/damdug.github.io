import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D2NiA7f1.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CRo5-Q8Q.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container section"> <h1 style="margin-bottom: var(--space-lg);">Contact</h1> <div style="max-width: 600px;"> <p style="margin-bottom: var(--space-xl);">For inquiries not covered by the Work With Me page.</p> <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style="display: flex; flex-direction: column; gap: var(--space-lg);"> <div> <label for="name" class="label" style="display: block; margin-bottom: var(--space-xs);">Name</label> <input type="text" id="name" name="name" required class="form-input" style="width: 100%;"> </div> <div> <label for="email" class="label" style="display: block; margin-bottom: var(--space-xs);">Email</label> <input type="email" id="email" name="email" required class="form-input" style="width: 100%;"> </div> <div> <label for="message" class="label" style="display: block; margin-bottom: var(--space-xs);">Message</label> <textarea id="message" name="message" required class="form-input" rows="8" style="width: 100%; resize: vertical; font-family: var(--font-mono);"></textarea> </div> <button type="submit" class="btn btn--accent">Send Message</button> </form> </div> </article> ` })}`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/contact.astro", void 0);

const $$file = "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_D2NiA7f1.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CRo5-Q8Q.mjs';
import { g as getCollection } from '../chunks/_astro_content_C1JXYIk2.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allNotes = await getCollection("notes", ({ data }) => !data.draft);
  const sortedNotes = allNotes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Notes" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container section"> <h1 style="margin-bottom: var(--space-lg);">Notes</h1> ${sortedNotes.length === 0 ? renderTemplate`<p style="color: var(--text-tertiary); font-size: 0.875rem;">// Nothing here yet. Check back soon.</p>` : renderTemplate`<div> ${sortedNotes.map((note) => {
    const formatted = note.data.date.toISOString().split("T")[0];
    const noteUrl = `/notes/${note.slug}`;
    const isOneRuleNote = ["the-one-rule", "the-non-impedance-principle", "the-next-step-doctrine"].includes(note.slug);
    return renderTemplate`<a${addAttribute(noteUrl, "href")} class="note-item" style="display: flex;"> <div style="flex: 1;"> <h3 class="note-title" style="font-size: 1rem; margin-bottom: var(--space-xs);"> ${note.data.title} </h3> <div style="display: flex; gap: var(--space-sm); align-items: center;"> <span class="tag tag--accent">${note.data.category}</span> </div> ${isOneRuleNote && renderTemplate`<p style="margin-top: var(--space-xs); font-size: 0.8125rem; color: var(--text-tertiary);">
Part of${" "} <a href="/one-rule" style="color: var(--text-tertiary); text-decoration: underline;">
The One Rule Framework
</a>${" "}
→
</p>`} </div> <span class="note-date">${formatted}</span> </a>`;
  })} </div>`} </div> ` })}`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/notes/index.astro", void 0);

const $$file = "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/notes/index.astro";
const $$url = "/notes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

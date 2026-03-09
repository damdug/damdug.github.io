import { b as createAstro, c as createComponent, a as renderTemplate } from '../chunks/astro/server_D2NiA7f1.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://damdug.com");
const $$Confirm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Confirm;
  const token = Astro2.url.searchParams.get("token");
  const email = Astro2.url.searchParams.get("email");
  const expiry = Astro2.url.searchParams.get("expiry");
  if (token && email && expiry) {
    const encodedEmail = encodeURIComponent(email);
    return Astro2.redirect(
      `/api/verify?token=${token}&email=${encodedEmail}&expiry=${expiry}`
    );
  }
  return renderTemplate`<meta http-equiv="refresh" content="0;url=/hdk?error=invalid">`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/confirm.astro", void 0);

const $$file = "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/pages/confirm.astro";
const $$url = "/confirm";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Confirm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

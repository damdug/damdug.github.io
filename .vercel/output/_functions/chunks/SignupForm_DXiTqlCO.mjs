import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, e as addAttribute, i as renderScript } from './astro/server_D2NiA7f1.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://damdug.com");
const $$SignupForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignupForm;
  const {
    label = "Get access to all resources \u2014 free.",
    placeholder = "your@email.com",
    buttonText = "Get Access"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="signup-form"> ${label && renderTemplate`<p class="label" style="margin-bottom: var(--space-sm);">${label}</p>`} <form class="form-row" id="signup-form"> <input type="email" name="email"${addAttribute(placeholder, "placeholder")} required class="form-input"> <button type="submit" class="btn btn--accent">${buttonText}</button> </form> <p id="signup-message" style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: var(--space-sm); display: none;"></p> </div> ${renderScript($$result, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/components/SignupForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/douglasgalloway/Documents/GitHub/damdug.github.io/src/components/SignupForm.astro", void 0);

export { $$SignupForm as $ };

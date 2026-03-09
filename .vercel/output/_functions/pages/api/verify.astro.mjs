import { createHmac } from 'crypto';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const email = url.searchParams.get("email");
  const expiry = url.searchParams.get("expiry");
  if (!token || !email || !expiry) {
    return redirect("/hdk?error=invalid");
  }
  if (Date.now() > parseInt(expiry)) {
    return redirect("/hdk?error=expired");
  }
  const secret = undefined                           ;
  const payload = `${email}:${expiry}`;
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  if (token !== expected) {
    return redirect("/hdk?error=invalid");
  }
  const cookieValue = createHmac("sha256", secret).update(email).digest("hex");
  const maxAge = 60 * 60 * 24 * 90;
  return redirect("/resources", 302, {
    headers: {
      "Set-Cookie": `damdug_access=${cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

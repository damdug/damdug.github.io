import { createHmac } from 'crypto';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString();
  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "Valid email required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Token ${undefined                                  }`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, tags: ["resources-access"] })
    });
  } catch (e) {
    console.error("Buttondown error:", e);
  }
  const secret = undefined                           ;
  const expiry = Date.now() + 1e3 * 60 * 60 * 24;
  const payload = `${email}:${expiry}`;
  const token = createHmac("sha256", secret).update(payload).digest("hex");
  const magicLink = `${undefined                        }/confirm?token=${token}&email=${encodeURIComponent(email)}&expiry=${expiry}`;
  console.log("Magic link (dev):", magicLink);
  return new Response(JSON.stringify({
    success: true,
    message: "Check your email for access link"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

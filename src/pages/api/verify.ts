import type { APIRoute } from 'astro';
import { createHmac } from 'crypto';

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const email = url.searchParams.get('email');
  const expiry = url.searchParams.get('expiry');

  if (!token || !email || !expiry) {
    return redirect('/hdk?error=invalid');
  }

  // Validate expiry
  if (Date.now() > parseInt(expiry)) {
    return redirect('/hdk?error=expired');
  }

  // Validate token
  const secret = import.meta.env.AUTH_SECRET;
  const payload = `${email}:${expiry}`;
  const expected = createHmac('sha256', secret).update(payload).digest('hex');

  if (token !== expected) {
    return redirect('/hdk?error=invalid');
  }

  // Set auth cookie — 90 days
  const cookieValue = createHmac('sha256', secret)
    .update(email)
    .digest('hex');

  const maxAge = 60 * 60 * 24 * 90;

  return redirect('/resources', 302, {
    headers: {
      'Set-Cookie': `damdug_access=${cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`,
    },
  });
};

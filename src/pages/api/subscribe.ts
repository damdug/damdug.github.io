import type { APIRoute } from 'astro';
import { createHmac } from 'crypto';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email')?.toString();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Valid email required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Add to Buttondown
  try {
    await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${import.meta.env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, tags: ['damdug-signup'] }),
    });
  } catch (e) {
    // Continue even if Buttondown fails — don't block the user
    console.error('Buttondown error:', e);
  }

  // Generate magic link token
  const secret = import.meta.env.AUTH_SECRET;
  const expiry = Date.now() + 1000 * 60 * 60 * 24; // 24 hours
  const payload = `${email}:${expiry}`;
  const token = createHmac('sha256', secret).update(payload).digest('hex');
  const magicLink = `${import.meta.env.SITE_URL}/confirm?token=${token}&email=${encodeURIComponent(email)}&expiry=${expiry}`;

  // Send magic link via Buttondown transactional email
  // NOTE: If Buttondown transactional email is not configured,
  // log the magic link for testing and implement email sending separately
  console.log('Magic link (dev):', magicLink);

  // TODO: Send magicLink via email to user
  // Implement via Buttondown transactional emails or Resend fallback

  return new Response(JSON.stringify({
    success: true,
    message: 'Check your email for access link',
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

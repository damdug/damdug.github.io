import type { APIRoute } from 'astro';
import { createHmac } from 'crypto';

// CORS headers for cross-origin requests
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle CORS preflight requests
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
};

export const POST: APIRoute = async ({ request }) => {
  console.log('[subscribe] POST request received');
  console.log('[subscribe] Headers:', Object.fromEntries(request.headers.entries()));

  const { email } = await request.json();
  console.log('[subscribe] Email:', email);

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Valid email required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
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
  try {
    const emailBody = `Here's your access link for the damdug.com Library.

${magicLink}

This link expires in 24 hours.

— Douglas M. Galloway
damdug.com`;

    await fetch('https://api.buttondown.email/v1/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${import.meta.env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        subject: 'Your access link — damdug.com',
        body: emailBody,
      }),
    });

    console.log('[subscribe] Magic link email sent to:', email);
  } catch (e) {
    // Fallback: log the magic link if email sending fails
    console.error('[subscribe] Failed to send email:', e);
    console.log('[subscribe] Magic link (fallback):', magicLink);
  }

  return new Response(JSON.stringify({
    success: true,
    message: 'Check your email for access link',
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
};

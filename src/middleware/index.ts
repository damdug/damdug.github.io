import { defineMiddleware } from 'astro:middleware';

// Public routes that never require authentication
const PUBLIC_ROUTES = [
  '/api/subscribe',  // Signup form handler - creates Buttondown subscribers
  '/api/verify',     // Magic link verification - validates token and sets auth cookie
  '/confirm',        // Magic link landing page - redirects to /api/verify
];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = new URL(context.request.url);

  // Always allow public routes
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return next();
  }

  // No other auth checks currently implemented
  return next();
});

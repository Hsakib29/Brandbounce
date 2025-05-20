// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // --- DEBUGGING LOGS ---
  const country = request.headers.get('x-vercel-ip-country') || 'GB';
  console.log('Middleware: Header country =', country);

  let currencyCode = 'GBP';
  let currencySymbol = '£';

  if (country === 'US') {
    currencyCode = 'USD';
    currencySymbol = '$';
  } else if (['DE', 'FR', 'IT', 'ES', 'BE', 'NL', 'AT'].includes(country)) {
    currencyCode = 'EUR';
    currencySymbol = '€';
  }

  console.log(`Middleware: Setting currency for ${country}: ${currencyCode} (${currencySymbol})`);

  const response = NextResponse.next();
  response.cookies.set('user-currency-code', currencyCode, { path: '/' });
  response.cookies.set('user-currency-symbol', currencySymbol, { path: '/' });

  return response;
}

// Apply middleware to all paths except static files
export const config = {
  matcher: ['/', '/((?!_next|.*\\..*).*)'],
};

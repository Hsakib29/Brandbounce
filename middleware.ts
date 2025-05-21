// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Access the country code from the 'x-vercel-ip-country' header
  // This header is explicitly set by Vercel's Edge Network.
  const country = request.headers.get('x-vercel-ip-country') || 'GB'; // Default to 'GB' if header is not present

  let currencyCode = 'GBP';
  let currencySymbol = '£';

  if (country === 'US') {
    currencyCode = 'USD';
    currencySymbol = '$';
  } else if (['DE', 'FR', 'IT', 'ES', 'BE', 'NL', 'AT'].includes(country)) {
    currencyCode = 'EUR';
    currencySymbol = '€';
  }
  // Add more country-to-currency mappings as needed

  const response = NextResponse.next();
  response.cookies.set('user-currency-code', currencyCode, { path: '/' });
  response.cookies.set('user-currency-symbol', currencySymbol, { path: '/' });

  return response;
}

export const config = {
  matcher: '/', // Apply middleware to all requests
};
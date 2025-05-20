// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Explicitly tell TypeScript that 'request' *might* have a 'geo' property
  // This is a workaround if the types aren't being picked up correctly.
  const country = (request as any).geo?.country || 'GB'; // Default to GB if country not found or geo is undefined

  let currencyCode = 'GBP';
  let currencySymbol = '£';

  if (country === 'US') {
    currencyCode = 'USD';
    currencySymbol = '$';
  } else if (['DE', 'FR', 'IT', 'ES'].includes(country)) {
    currencyCode = 'EUR';
    currencySymbol = '€';
  }

  const response = NextResponse.next();
  response.cookies.set('user-currency-code', currencyCode, { path: '/' });
  response.cookies.set('user-currency-symbol', currencySymbol, { path: '/' });

  return response;
}

export const config = {
  matcher: '/',
};
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // --- DEBUGGING LOGS (Will appear in Vercel Deployment Logs) ---
  console.log('Middleware: Request URL:', request.url);
  console.log('Middleware: request.geo object:', (request as any).geo); // Use 'as any' temporarily for the geo property if type errors persist

  // Determine country (prioritizes Vercel's geo data)
  const country = (request as any).geo?.country || 'GB'; // Default to GB if geo data isn't available

  let currencyCode = 'GBP';
  let currencySymbol = '£';

  if (country === 'US') {
    currencyCode = 'USD';
    currencySymbol = '$';
  } else if (['DE', 'FR', 'IT', 'ES', 'BE', 'NL', 'AT'].includes(country)) { // Added more Eurozone countries
    currencyCode = 'EUR';
    currencySymbol = '€';
  }
  // Add more country-to-currency mappings as needed

  console.log(`Middleware: Determined Country: ${country}, Currency Code: ${currencyCode}`);

  const response = NextResponse.next();
  response.cookies.set('user-currency-code', currencyCode, { path: '/' });
  response.cookies.set('user-currency-symbol', currencySymbol, { path: '/' });

  console.log(`Middleware: Setting cookies: user-currency-code=${currencyCode}, user-currency-symbol=${currencySymbol}`);
  // --- END DEBUGGING LOGS ---

  return response;
}

export const config = {
  matcher: '/', // Apply middleware to all requests
};
// utils/currencyConverter.ts
import Cookies from 'js-cookie';

// Define the conversion rates
// Keys are source currency, inner keys are target currency
// You can adjust these rates to reflect current market rates or your preferred rates.
const CONVERSION_RATES: { [key: string]: { [key: string]: number } } = {
  GBP: {
    USD: 1.25, // Example: 1 GBP = 1.25 USD
    EUR: 1.15, // Example: 1 GBP = 1.15 EUR
  },
  USD: {
    GBP: 1 / 1.25, // Convert USD to GBP
    EUR: 1.15 / 1.25, // Convert USD to EUR (via GBP: USD->GBP->EUR)
  },
  EUR: {
    GBP: 1 / 1.15, // Convert EUR to GBP
    USD: 1.25 / 1.15, // Convert EUR to USD (via GBP: EUR->GBP->USD)
  },
  // Add other currencies and their conversion rates as needed
};

// Map common currency symbols to their ISO currency codes
const SYMBOL_TO_CURRENCY_MAP: { [key: string]: string } = {
  '£': 'GBP',
  '$': 'USD',
  '€': 'EUR',
};

/**
 * Converts currency amounts found within a given text string.
 * It identifies patterns like "£123.45", "$100", "€50/mo" and converts them
 * to the user's detected currency based on cookies.
 *
 * @param text The input string potentially containing currency amounts.
 * @returns The string with converted and re-formatted prices.
 */
export function convertTextPrices(text: string): string {
  const userCurrencyCode = Cookies.get('user-currency-code') || 'GBP';

  // Regex to find currency amounts.
  // It captures:
  // 1. The currency symbol (£, $, €)
  // 2. The numeric value (integer or decimal)
  // The 'g' flag ensures all occurrences are matched.
  const priceRegex = /(£|\$|€)(\d+(?:\.\d+)?)/g;

  return text.replace(priceRegex, (match, originalSymbol, priceValueStr) => {
    const originalCurrency = SYMBOL_TO_CURRENCY_MAP[originalSymbol];
    const numericPrice = parseFloat(priceValueStr);

    // If the original currency symbol is not recognized or
    // if the original currency is already the target currency,
    // return the original match without conversion.
    if (!originalCurrency || originalCurrency === userCurrencyCode) {
      return match;
    }

    let convertedPrice = numericPrice;
    const ratesFromOriginal = CONVERSION_RATES[originalCurrency];

    // Attempt direct conversion if a path exists
    if (ratesFromOriginal && ratesFromOriginal[userCurrencyCode]) {
      convertedPrice = numericPrice * ratesFromOriginal[userCurrencyCode];
    } else {
      // Fallback: If no direct conversion rate, try converting via GBP as an intermediary.
      // This makes the conversion robust even if not all direct paths are defined.
      if (originalCurrency !== 'GBP' && CONVERSION_RATES[originalCurrency]?.GBP) {
         const priceInGBP = numericPrice * CONVERSION_RATES[originalCurrency].GBP;
         if (CONVERSION_RATES.GBP[userCurrencyCode]) {
             convertedPrice = priceInGBP * CONVERSION_RATES.GBP[userCurrencyCode];
         }
      } else {
        // If conversion is not possible, return original match (or log a warning)
        console.warn(`Could not convert price from ${originalCurrency} to ${userCurrencyCode} for value ${numericPrice}`);
        return match;
      }
    }

    // Format the converted price with the new symbol and locale-aware formatting
    // Use Intl.NumberFormat for proper currency display based on the user's browser settings.
    const formattedPrice = new Intl.NumberFormat(
        navigator.language || 'en-US',
        {
            style: 'currency',
            currency: userCurrencyCode,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }
    ).format(convertedPrice);

    return formattedPrice;
  });
}
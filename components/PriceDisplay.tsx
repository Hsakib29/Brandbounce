// components/PriceDisplay.tsx
"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

// Define types for your pre-converted prices to hold single numbers
export type ServicePrice = {
  GBP: number | string; // Allow string for specific cases like "£50/min" if it needs custom handling
  USD?: number | string;
  EUR?: number | string;
  // Add other currencies as needed
};

interface PriceDisplayProps {
  priceData: ServicePrice; // This will now hold single numbers or specific strings
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ priceData }) => {
  const [displayPrice, setDisplayPrice] = useState<string>("Loading...");

  useEffect(() => {
    const userCurrencyCode = Cookies.get("user-currency-code") || "GBP";

    // Get the price data for the detected currency, or fallback to GBP
    const currentPriceValue =
      priceData[userCurrencyCode as keyof ServicePrice] || priceData.GBP;

    if (currentPriceValue !== undefined && currentPriceValue !== null) {
      if (typeof currentPriceValue === "number") {
        // Handle numeric prices
        const formattedPrice = new Intl.NumberFormat(
          navigator.language || "en-US", // Use user's locale or default to en-US
          {
            style: "currency",
            currency: userCurrencyCode,
            minimumFractionDigits: 0, // No decimals for whole numbers
            maximumFractionDigits: 2, // Up to two decimals if needed
          }
        ).format(currentPriceValue);
        setDisplayPrice(formattedPrice);
      } else if (typeof currentPriceValue === "string") {
        // Handle specific string formats like "£50/min"
        // This attempts to replace the GBP symbol with the current currency symbol
        // and keeps the rest of the string as is.
        const tempFormatter = new Intl.NumberFormat(
          navigator.language || "en-US",
          { style: "currency", currency: userCurrencyCode }
        );
        // Get the currency symbol (e.g., "$", "€", "£") for the detected currency
        const symbol = tempFormatter
          .format(0)
          .replace(/0(\.00)?/, "")
          .trim(); // Extract symbol from a formatted zero

        let formattedString = currentPriceValue;
        if (userCurrencyCode === "USD") {
          formattedString = formattedString.replace(/£/, symbol); // Replace £ with $
        } else if (userCurrencyCode === "EUR") {
          formattedString = formattedString.replace(/£/, symbol); // Replace £ with €
        }
        // For other currencies, you'd add more specific replacement rules if needed.
        // Or simply display the original string if no direct conversion is feasible for complex strings.

        setDisplayPrice(formattedString);
      } else {
        setDisplayPrice("Price unavailable");
      }
    } else {
      setDisplayPrice("Price unavailable");
    }
  }, [priceData]); // Re-run effect if priceData prop changes

  return <span>{displayPrice}</span>;
};

export default PriceDisplay;

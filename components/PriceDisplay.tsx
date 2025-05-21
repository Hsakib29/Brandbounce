// components/PriceDisplay.tsx
"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export type ServicePrice = {
  GBP: number | string;
  USD?: number | string;
  EUR?: number | string;
};

interface PriceDisplayProps {
  priceData: ServicePrice;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ priceData }) => {
  const [displayPrice, setDisplayPrice] = useState<string>("Loading...");

  useEffect(() => {
    const userCurrencyCode = Cookies.get("user-currency-code") || "GBP";

    // Fallback to GBP if the specific currency is not available in priceData
    const currentPriceValue =
      priceData[userCurrencyCode as keyof ServicePrice] || priceData.GBP;

    if (currentPriceValue !== undefined && currentPriceValue !== null) {
      if (typeof currentPriceValue === "number") {
        // --- ROUNDING APPLIED HERE FOR NUMERICAL PRICES ---
        const formattedPrice = new Intl.NumberFormat(
          navigator.language || "en-US",
          {
            style: "currency",
            currency: userCurrencyCode,
            minimumFractionDigits: 0, // Ensures at least 0 decimal places
            maximumFractionDigits: 0, // <--- KEY: Rounds to the nearest whole number
          }
        ).format(currentPriceValue);
        setDisplayPrice(formattedPrice);
      } else if (typeof currentPriceValue === "string") {
        // --- ROUNDING APPLIED HERE FOR PRICES EMBEDDED IN STRINGS (like "$187.50") ---
        const numberRegex = /(\d+(?:\.\d+)?)/; // Regex to find the numeric part

        let processedString = currentPriceValue;

        const match = currentPriceValue.match(numberRegex);
        if (match && match[1]) {
          const numericPart = parseFloat(match[1]);
          const roundedNumericPart = Math.round(numericPart); // <--- KEY: Apply standard rounding

          // Replace the original numeric part in the string with the rounded one
          processedString = currentPriceValue.replace(
            match[1],
            roundedNumericPart.toString()
          );
        }

        // Now, ensure the correct currency symbol is used for the target currency.
        const tempFormatter = new Intl.NumberFormat(
          navigator.language || "en-US",
          {
            style: "currency",
            currency: userCurrencyCode,
            minimumFractionDigits: 0, // For consistent symbol extraction
            maximumFractionDigits: 0,
          }
        );
        const targetSymbol = tempFormatter
          .format(0)
          .replace(/0(\.00)?/, "")
          .trim();

        // Replace any original currency symbols in the processed string with the new target symbol
        processedString = processedString.replace(/£|\$|€/g, targetSymbol);

        setDisplayPrice(processedString);
      } else {
        setDisplayPrice("Price unavailable");
      }
    } else {
      setDisplayPrice("Price unavailable");
    }
  }, [priceData]);

  return <span>{displayPrice}</span>;
};

export default PriceDisplay;

// components/PriceDisplay.tsx
"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export type ServicePrice = {
  GBP: number | string;
  USD?: number | string;
  EUR?: number | string;
  // Add other currencies as needed
};

interface PriceDisplayProps {
  priceData: ServicePrice;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ priceData }) => {
  const [displayPrice, setDisplayPrice] = useState<string>("Loading...");

  useEffect(() => {
    // --- DEBUGGING LOGS (Will appear in browser console) ---
    const userCurrencyCode = Cookies.get("user-currency-code") || "GBP";
    console.log(
      'PriceDisplay useEffect: Cookie "user-currency-code":',
      userCurrencyCode
    );
    console.log("PriceDisplay useEffect: priceData prop:", priceData);

    const currentPriceValue =
      priceData[userCurrencyCode as keyof ServicePrice] || priceData.GBP;
    console.log(
      "PriceDisplay useEffect: Selected price value for display:",
      currentPriceValue
    );
    // --- END DEBUGGING LOGS ---

    if (currentPriceValue !== undefined && currentPriceValue !== null) {
      if (typeof currentPriceValue === "number") {
        const formattedPrice = new Intl.NumberFormat(
          navigator.language || "en-US",
          {
            style: "currency",
            currency: userCurrencyCode,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }
        ).format(currentPriceValue);
        setDisplayPrice(formattedPrice);
      } else if (typeof currentPriceValue === "string") {
        const tempFormatter = new Intl.NumberFormat(
          navigator.language || "en-US",
          { style: "currency", currency: userCurrencyCode }
        );
        // Get the currency symbol. This is a bit tricky as format(0) includes numbers.
        // We want to extract just the symbol.
        const symbol = tempFormatter
          .format(0)
          .replace(/0(\.00)?/g, "")
          .trim();

        let formattedString = currentPriceValue;

        // Replace any known currency symbols with the new one
        formattedString = formattedString.replace(/£|\$|€/g, symbol); // Replace common symbols

        setDisplayPrice(formattedString);
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

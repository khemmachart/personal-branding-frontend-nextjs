import React from "react";
import { font } from "../designSystem/tokens";
import { colors } from "@/components/design-system";

export function Baseline() {
  const css = `
    :root { color-scheme: light; }
    html, body, #root { height: 100%; }
    body { margin:0; background: ${colors.offWhite}; color: ${colors.darkGray}; font-family:${font}; }
    *, *::before, *::after { box-sizing: border-box; }
    a { color: inherit; text-decoration: none; }
    @media print {
      body { margin: 0; }
      @page { margin: 0.5in; }
    }
  `;
  return <style>{css}</style>;
}

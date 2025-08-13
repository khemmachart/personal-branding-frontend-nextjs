import React from "react";
import { colors, font } from "../designSystem/tokens";

export function Baseline() {
  const css = `
    :root { color-scheme: light; }
    html, body, #root { height: 100%; }
    body { margin:0; background:${colors.bg}; color:${colors.text}; font-family:${font}; }
    *, *::before, *::after { box-sizing: border-box; }
    a { color: inherit; text-decoration: none; }
    @media print {
      body { margin: 0; }
      @page { margin: 0.5in; }
    }
  `;
  return <style>{css}</style>;
}

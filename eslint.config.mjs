import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "warn",
      
      // React specific rules
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
      "react-hooks/exhaustive-deps": "warn",
      
      // Next.js specific rules
      "@next/next/no-img-element": "warn",
      "@next/next/no-document-import-in-page": "error",
      
      // Import/export rules - relaxed
      "import/order": "off",
      "import/no-anonymous-default-export": "warn",
      
      // Custom rules for Server/Client components
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["react-dom/client"],
              message: "Use 'react-dom' instead of 'react-dom/client' in Server Components"
            }
          ]
        }
      ]
    }
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      // Additional TypeScript rules
      // "@typescript-eslint/consistent-type-imports": "error" // Disabled for now
    }
  },
  {
    files: ["app/**/*.tsx", "app/**/*.ts"],
    rules: {
      // App Router specific rules - removed problematic rule
    }
  }
];

export default eslintConfig;

/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 120,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "",
    "^@/components/(.*)$",
    "^@/components/ui/(.*)$",
    "^[./]",
    "",
    "^@/lib/(.*)$",
    "",
    "^@/hooks/(.*)$",
    "^@/styles/(.*)$",
    "",
    "^@/env(.*)$",
    "^@/config/(.*)$",
    "",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js", // Make sure this points to your Tailwind config
  tailwindFunctions: ["clsx", "cn", "cva"], // Add any utility functions you use for class composition
}

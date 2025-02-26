module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-nocheck": false,
        "ts-ignore": true,
        "ts-check": false,
        "ts-expect-error": true,
      },
    ],
  },
}

const {
  off,
} = require("next/dist/client/components/react-dev-overlay/pages/bus")
module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
  },
}

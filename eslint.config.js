
const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "prisma/migrations/**"
    ]
  },

  js.configs.recommended,

  {
    files: ["src/**/*.js", "tests/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },

    rules: {
      "no-unused-vars": "warn"
    }
  }
];

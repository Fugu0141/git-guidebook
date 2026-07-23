import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"]
      }
    }
  },
  {
    ignores: [".astro/**", "dist/**", "node_modules/**", "public/**"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }]
    }
  }
];

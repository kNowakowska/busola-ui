import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default defineConfig(
  {
    ignores: [".next/**", "node_modules/**"],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  ...compat.config({ extends: ["next/typescript"] }),
  eslintConfigPrettier
);

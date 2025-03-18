import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      semi: ["warn"],
      "no-console": ["warn"],
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      "no-extra-boolean-cast": ["off"],
      "no-empty-pattern": ["warn"],
      "react-hooks/rules-of-hooks": ["error"],
      "react-hooks/exhaustive-deps": ["warn"],
      "react/prop-types": ["off"],
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-non-null-assertion": ["off"],
      "no-empty-pattern": ["warn"],
    },
  }),
];

export default eslintConfig;

import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import promisePlugin from "eslint-plugin-promise";
import securityPlugin from "eslint-plugin-security";
import globals from "globals";

export default [
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      import: importPlugin,
      promise: promisePlugin,
      security: securityPlugin
    },
    rules: {
      // Import rules
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }],
      "import/first": "error",
      "import/no-mutable-exports": "error",
      "import/no-cycle": "error",

      // Promise rules
      "promise/always-return": "warn",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "warn",
      "promise/no-new-statics": "error",
      "promise/valid-params": "error",

      // Security rules
      "security/detect-unsafe-regex": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-child-process": "warn",
      "security/detect-eval-with-expression": "error",
      "security/detect-possible-timing-attacks": "warn",

      // Node.js best practices
      "no-process-exit": "error",
      "no-path-concat": "error",
      "handle-callback-err": "error",
      "no-new-require": "error",
      "no-mixed-requires": "error",

      // Basic error prevention
      "no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }],
      "no-undef": "error",
      "no-unreachable": "error",

      // Code style
      "prefer-const": "warn",
      "no-var": "warn",

      // Best practices
      "eqeqeq": ["error", "always"],
      "no-return-await": "error",
      "require-await": "warn",
      "no-throw-literal": "error",
      "no-duplicate-imports": "error"
    }
  },
  prettier
];

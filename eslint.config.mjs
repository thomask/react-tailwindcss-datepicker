import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
    {
        ignores: [
            "dist/**",
            "assets/**",
            "styles/**",
            ".next/**",
            ".rollup.cache/**",
            "node_modules/**",
            "next-env.d.ts"
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintReact.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: { jsx: true }
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            }
        },
        settings: {
            "react-x": { version: "19" }
        },
        rules: {
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "@typescript-eslint/no-var-requires": "off"
        }
    },
    {
        files: [
            "*.js",
            "*.cjs",
            "rollup.config.js",
            "tailwind.config.js",
            "postcss.config.js",
            "next.config.js"
        ],
        rules: {
            "@typescript-eslint/no-require-imports": "off"
        }
    },
    prettierRecommended,
    {
        rules: {
            "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }]
        }
    }
];

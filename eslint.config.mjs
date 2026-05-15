import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
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
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react,
            "react-hooks": reactHooks
        },
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
            react: { version: "19" }
        },
        rules: {
            ...react.configs.recommended.rules,
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "react/prop-types": "off",
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
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

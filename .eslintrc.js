module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["@typescript-eslint", "react-hooks"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "next/core-web-vitals",
    ],
    rules: {
        // Checks rules of Hooks
        "react-hooks/rules-of-hooks": "error",
        // Checks effect dependencies
        "react-hooks/exhaustive-deps": "warn",
        // "@typescript-eslint/no-var-requires": "off"
    },
};

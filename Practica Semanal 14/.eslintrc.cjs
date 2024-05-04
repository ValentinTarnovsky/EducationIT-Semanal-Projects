module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "off",

        // Reglas Generales
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "camelcase": [2, { "properties": "always" }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", { "before": false, "after": true }],

        // Reglas de Interlineados
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 1 }],
        "linebreak-style": ["error", "windows"],
        "eol-last": ["error", "never"],

        // Reglas de Variables y Constantes
        "prefer-const": ["error", { "destructuring": "any", "ignoreReadBeforeAssign": false }],

        // Reglas de Funciones
        "func-style": ["error", "expression"],
        "no-spaced-func": "error",
        "max-statements": ["error", 15],
        "arrow-parens": ["error", "always"],

        // Reglas de Arrays
        "array-bracket-spacing": ["error", "always", { "singleValue": false, "arraysInArrays": true, "objectsInArrays": false }],

        // Reglas de Objetos
        "object-curly-spacing": ["error", "always"],
    },
};
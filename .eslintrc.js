module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "sort-imports-es6-autofix"],
  rules: {
    semi: ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "unicode-bom": ["error", "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "single", "multiple", "all"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "all",
        arrowParens: "always",
      },
    ],
  },
};

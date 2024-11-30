module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prefer-template': 0,
    'react/no-children-prop': [0],
    "import/no-unresolved": ["error", { "ignore": ["@vercel/analytics"] }],
    'linebreak-style': 0
  },
};

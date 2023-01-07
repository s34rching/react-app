module.exports = {
  env: {
    browser: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    $: 'readonly',
    cy: 'readonly',
  },
  rules: {
    "class-methods-use-this": 0,
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "prefer-destructuring": ["error", {"object": false, "array": false}]
  },
};

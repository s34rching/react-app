module.exports = {
  root: true,
  env: {
    browser: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  globals: {
    $: 'readonly',
  },
  rules: {
    "class-methods-use-this": 0,
  },
};

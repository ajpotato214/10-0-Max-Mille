module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'comma-dangle': 0,
    'prefer-destructuring': 0,
    'jsx-indent': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-indent': 0,
  },
};

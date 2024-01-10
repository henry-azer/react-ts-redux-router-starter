module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.cjs'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'off', 
    'react/react-in-jsx-scope': 'off', 
    'react/jsx-props-no-spreading': 'off', 
    '@typescript-eslint/explicit-module-boundary-types': 'off', 
    'import/extensions': 'off', 
    'import/no-extraneous-dependencies': 'off', 
    '@typescript-eslint/no-explicit-any': 'off', 
    '@typescript-eslint/comma-dangle': 'off', 
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
};

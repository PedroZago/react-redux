module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: [2, 'always'],
    camelcase: 'off',
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/self-closing-comp': 'off',
    'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // 'react/jsx-no-constructed-context-values': 'off',
    'default-param-last': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
  },
};

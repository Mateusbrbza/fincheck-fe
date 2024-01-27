module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts', '.d.ts'],
      },
      alias: {
        extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
        map: [
          ['@/components', './src/components'],
          ['@/pages', './src/pages'],
          ['@/router', './src/router'],
          ['@/store', './src/store'],
          ['@/styles', './src/styles'],
          ['@/types', './src/types'],
          ['@/utils', './src/utils'],
        ],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'prefer-destructuring': 'off',
    'react/function-component-definition': 0,
    'no-param-reassign': 0,
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    'array-callback-return': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-new': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/no-empty-function': 0,
    'array-callback-return': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/react-in-jsx-scope': 'off',
  },
}

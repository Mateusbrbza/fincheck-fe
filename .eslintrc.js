module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "prettier",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/jsx-runtime",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
     },
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "prettier"
    ],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      'no-new': 0,
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/rules-of-hooks': "error",
      'react-hooks/exhaustive-deps': "warn",
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
      "react/jsx-props-no-spreading": 0,
      "@typescript-eslint/no-empty-function": 0,
      "array-callback-return": "off",
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        }
      ],
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [".tsx"]
        }
      ],
      "@typescript-eslint/no-use-before-define": ["error"],
      "react/react-in-jsx-scope": "off",
    }
}

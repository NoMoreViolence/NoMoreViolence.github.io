/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  root: true,
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    // Typescript & TypescriptReact files
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      env: {
        browser: true,
        es2021: true,
        jest: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-absolute-path': 'off',
      },
    },
    // Config files
    {
      files: [
        '.eslintrc.cjs',
        '.prettierrc.cjs',
        '*.config.js',
        '*.config.cjs',
        'babel.config.cjs',
        'commitlint.config.cjs',
      ],
      env: { node: true },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
};

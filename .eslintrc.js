// @ts-check
module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'deprecation',
    'eslint-comments',
    'eslint-plugin',
    'jest',
    'jsdoc',
    'simple-import-sort',
    'unicorn',
  ],
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowIIFEs: true },
    ],
    'deprecation/deprecation': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/issues/1169
    'jsdoc/check-param-names': 'off',
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/1175
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-yields': 'off',
    'jsdoc/tag-lines': 'off',

    'simple-import-sort/imports': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        'deprecation/deprecation': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    // all test files
    {
      extends: ['plugin:jest/recommended'],
      files: ['./tests/**/*'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};

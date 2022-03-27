/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: ['*.{js,cjs,mjs}'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off', // disables line length check
        'vue/max-len': [
          'warn', {
            code: 100,
            // template: 100,
            // tabWidth: 2,
            // comments: 100,
            // ignorePattern: '',
            // ignoreComments: true,
            // ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignoreHTMLAttributeValues: true,
            ignoreHTMLTextContents: true,
          },
        ],
      },
    },
  ],
}

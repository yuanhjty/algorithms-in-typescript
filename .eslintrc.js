module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['y-ts-base'],
      rules: {
        'no-extra-parens': 0,
        'comma-dangle': 0,
      },
    },
    {
      files: ['**/*.js'],
      extends: ['y-base'],
      rules: {
        'comma-dangle': 0,
      },
    },
  ],
};

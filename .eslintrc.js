module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['y-ts-base'],
      rules: {},
    },
    {
      files: ['**/*.js'],
      extends: ['y-base'],
      rules: {},
    },
  ],
};

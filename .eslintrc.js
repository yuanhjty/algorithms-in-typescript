module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['y-ts-base'],
      rules: {
        'no-plusplus': 0,
        'no-param-reassign': 0,
      },
    },
    {
      files: ['**/*.js'],
      extends: ['y-base'],
      rules: {},
    },
  ],
};

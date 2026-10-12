module.exports = {
  root: true,
  ignorePatterns: ['dist/'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // SCSS импортируется в JS через Webpack, а не разрешается как JS-модуль.
    'import/no-unresolved': ['error', { ignore: ['\\.scss$'] }],
    'linebreak-style': 'off', // Отключение проверки стиля переноса строк
    'no-console': 'off', // Отключение проверки использования console.log
  },

};

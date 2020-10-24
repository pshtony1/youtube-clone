module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "off",
    "no-console": "off", // Can use for 'console.xxx'
    "spaced-comment": "off", // Can use '//bla-bla'
    "no-else-return": "off", // Can use else after return
  },
};

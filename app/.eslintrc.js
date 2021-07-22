module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  ignorePatterns: [".circleci", ".eslintrc.js"],
  // add your custom rules here
  rules: {
    "comma-dangle": "off",
    "semi": "off"
  }
}

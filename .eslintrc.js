module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-console": 0,
    "no-debugger": 0,
    "no-trailing-spaces": [
      "warn",
      {
        "skipBlankLines": true,
        "ignoreComments": true
      }
    ],
    "lines-around-comment": [
      "warn",
      {
        "beforeBlockComment": true,
        "beforeLineComment": true
      }
    ],
    "indent": [
      "error",
      2
    ],
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "@typescript-eslint/no-extra-semi": [
      "off"
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true
      }
    ],
    "space-infix-ops": "warn",
    "space-before-function-paren": "off",
    "padded-blocks": 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}

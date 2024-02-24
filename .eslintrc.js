module.exports = {
  env: {
    node: true
  },
  extends: ['standard'],
  plugins: ['yml'],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs,yaml, *.yml}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'require-await': 'error',
    curly: 'error'
  }
}

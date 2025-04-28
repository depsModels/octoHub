import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'src/styles/output.css']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  }
];

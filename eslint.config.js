import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.css'],
    // If you're using stylelint, these rules should be handled there instead
    rules: {
      'no-invalid-position-at-import-rule': 'off',
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['utility', 'apply', 'tailwind', 'layer', 'config']
        }
      ]
    }
  }
])
import { Linter } from 'eslint';

export const configs: Record<string, Linter.Config> = {
  ts: {
    extends: ['standard', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
      '@typescript-eslint/ban-types': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-redeclare': 0,
      'no-use-before-define': 0,
      'no-useless-constructor': 0,
    },
  },
  tsJest: {
    extends: ['react-app/jest', 'plugin:@codecb/ts'],
  },
  tsReact: {
    extends: ['react-app', 'plugin:@codecb/ts'],
  },
};

const prettierConfig = require('zonia-config-prettier');

const eslintTypescriptConfig = {
	root: false,
	parser: '@typescript-eslint/parser',

	extends: [
		// defaults
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		// code guidelines
		'airbnb',
		'airbnb-typescript',
		// libs
		'plugin:prettier/recommended',
		'plugin:import/typescript',
	],
	plugins: ['@typescript-eslint', 'prettier', 'import', 'regexp', 'sonarjs'],
	rules: {
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '[iI]gnored',
			},
		],
		'import/export': 'warn',
		'import/extensions': 'off',
		'import/named': 'warn',
		'import/newline-after-import': 'warn',
		'import/no-named-as-default': 'off',
		'import/no-unresolved': 'warn',
		'import/order': [
			'warn',
			{
				'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
				'newlines-between': 'always',
				'alphabetize': {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/prefer-default-export': 'off',
		'prettier/prettier': ['warn', prettierConfig],
		'sonarjs/prefer-immediate-return': 'off',
		'sonarjs/prefer-single-boolean-return': 'off',
	},
};

module.exports = eslintTypescriptConfig;

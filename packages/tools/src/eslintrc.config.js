module.exports = {
    env: {
        browser: true,
        jest: true,
        node: true
    },
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier', 'react'],
    rules: {
        'import/no-extraneous-dependencies': ['off', {'devDependencies': ['**/*.stories.tsx', '**/*.test.tsx', '**/*.spec.js']}],
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': ['error', { 'extensions': ['.jsx', '.tsx', '.stories.tsx'] }]
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: [
                'babel.config.js',
                'jest.config.js',
                'webpack.**.js',
                '.prettier.js',
            ],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
}

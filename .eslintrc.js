module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'linebreak-style': 0,
        'react/prefer-stateless-function': 0,
    },
};

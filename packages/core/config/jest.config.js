const base = require('@monorepo_template/tools/src/jest.config.js');

const config = {
    ...base,
    rootDir: "../",
    roots: [
        "<rootDir>/src"
    ]
};

module.exports = config;

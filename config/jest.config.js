const path = require('path');
module.exports = {
    rootDir: path.join(__dirname, '../src'),
    verbose: true,
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage:true,
    transform:{ "^.+\\.js$": "babel-jest"},
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
};
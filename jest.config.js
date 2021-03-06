module.exports = {
  setupFiles: ['<rootDir>/tests/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/assetsTransformer.js',
    "\\.(css|less)$": "<rootDir>/tests/assetsTransformer.js",
  },
}
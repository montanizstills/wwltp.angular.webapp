// const {defaults} = require('jest-config')
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories:["node_modules","<rootDir>"],
  // moduleDirectories:["node_modules"],
  // "roots": [
  //   "<rootDir>/src"
  // ],
  // moduleFileExtensions:[...defaults.moduleFileExtensions,'ts','tsx']
};
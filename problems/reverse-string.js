// const Chai = require('chai')
const { expect } = require('chai')

module.exports = function reverseString(string) {
  return string.split('').reverse().join('');

};

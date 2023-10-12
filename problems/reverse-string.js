// const Chai = require('chai')
const { expect } = require('chai')

module.exports = function reverseString(string) {
  if (typeof(string) !== "string") {
    throw new TypeError ("must take a string!");
  }
  return string.split('').reverse().join('');

};

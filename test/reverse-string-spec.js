// const Chai = require('chai')
const { expect } = require('chai')
const reverseString = require('../problems/reverse-string')

describe ("Reverse String Function", function() {
    it ("should return the reversed string", function() {
        let test = "fun";
        expect(reverseString(test)).to.equal("nuf")
    })
})

// const Chai = require('chai')
const { expect } = require('chai')
const reverseString = require('../problems/reverse-string')

describe ("Reverse String Function", function() {
    it ("should return the reversed string", function() {
        let test = "fun";
        expect(reverseString(test)).to.equal("nuf");
    })
    it ("Should throw an error when input is not a string", function() {
        let test2 = 34;
        expect (() => reverseString(test2)).to.throw(TypeError);
    })
        // it ("should take in a string only", function() {
    //     expect(reverseString(typeOf(test))).to.equal(string);
    // })
})

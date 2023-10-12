const { expect } = require('chai')
const {returnsThree, reciprocal} = require('../problems/number-fun')


describe ("Returns Three Function", function() {
    it ("should return the number 3", function() {
        // let test = 3;
        expect(returnsThree()).to.equal(3);
    })
})

describe ("Returns Reciprocal Function", function() {

    it ("Should return reciprocal of number when input is between 1 and 1,000,000", function() {
        let test = 3;
        let test2 = 10;
        expect(reciprocal(test)).to.equal(1/3);
        expect(reciprocal(test2)).to.equal(1/10);
    })

    it ("Should throw RangeError when input is less than 1 or over 1,000,000", function() {
        let test = -1;
        let test2 = 1000001
        expect(() => reciprocal(test)).to.throw(RangeError);
        expect(() => reciprocal(test2)).to.throw(RangeError);
    })
})

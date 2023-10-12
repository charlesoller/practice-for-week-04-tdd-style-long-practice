const { expect } = require('chai')
const {returnsThree, reciprocal} = require('../problems/number-fun')


describe ("Returns Three Function", function() {
    it ("should return the number 3", function() {
        // let test = 3;
        expect(returnsThree()).to.equal(3);
    })
})

describe ("Returns Reciprocal Function", function() {
    it ("should return the reciprocal of the argument", function() {
        let test = 3;
        let test2 = 10;
        expect(reciprocal(test)).to.equal(1/3);
        expect(reciprocal(test2)).to.equal(1/10);
    })
    it ("should return the reciprocal of the argument", function() {
        let test = 3;
        expect(reciprocal(test)).to.throw(RangeError);
    })
})

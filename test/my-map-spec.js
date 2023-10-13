const { expect } = require('chai')
const chai = require('chai')
const spies = require('chai-spies');
chai.use(spies);
const myMap = require('../problems/my-map')

describe('myMap function', function () {
    let testArr;
    beforeEach(function () {
        testArr = [1, 2, 3, 4, 5];
    })
    it('Should replicate the built-in .map function by taking in an array and a callback, and returning a new array of each element of the passed in array after the callback has been called on them. This should not mutate the original array and should not use the built-in .map function.', function(){
        function multByTwo(x){
            return x * 2;
        }

        const spy = chai.spy.on(testArr, 'map')
        const funcSpy = chai.spy(multByTwo);
        expect(myMap(testArr, funcSpy)).to.eql([2, 4, 6, 8, 10]);
        expect(myMap(testArr, (x) => x - 1)).to.eql([0, 1, 2, 3, 4]);
        expect(testArr).to.eql([1, 2, 3, 4, 5]);
        expect(spy).to.not.have.been.called();
        expect(funcSpy).to.have.been.called.exactly(5);
    })
})

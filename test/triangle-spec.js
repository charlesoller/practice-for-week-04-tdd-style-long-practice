const { expect } = require('chai')
const { Triangle, Scalene, Isoceles } = require('../problems/triangle')

describe ('Triangle class', function () {
    let testTriangle = new Triangle(2, 3, 1);
    let testTriangle2 = new Triangle(1, 1, 1);
    let testTriangle3 = new Triangle(5, 8, 9);

    it('Should take in the lengths of 3 sides, side1, side2, and side3, and set these as properties on the instance.', function () {
        expect(testTriangle.side1).to.equal(2);
        expect(testTriangle.side2).to.equal(3);
        expect(testTriangle.side3).to.equal(1);
    })

    it('Should have the instance method getPerimeter() that returns the perimeter by summing the three sides.', function () {
        expect(testTriangle.getPerimeter()).to.equal(6);
    })

    it('Should have the instance method hasValidSideLengths() that returns true if the triangle is valid, and false if not. In a valid triangle, the sum of any 2 sides must be GREATER than the remaining side.', function () {
        expect(testTriangle.hasValidSideLengths()).to.be.false;
        expect(testTriangle2.hasValidSideLengths()).to.be.true;
        expect(testTriangle3.hasValidSideLengths()).to.be.true;
    })

    it('Should have the instance method validate() that adds an isValid property of true or false to the triangle depending on the results of calling hasValidSideLengths on it.', function () {
        testTriangle.validate();
        testTriangle2.validate();
        testTriangle3.validate();

        expect(testTriangle.isValid).to.be.false;
        expect(testTriangle2.isValid).to.be.true;
        expect(testTriangle3.isValid).to.be.true;
    })

    it('Should have the static method getValidTriangles() that takes in an arbitrary number of triangles and returns an array of the valid triangles.', function () {
        expect(Triangle.getValidTriangles(testTriangle, testTriangle2, testTriangle3)).to.eql([testTriangle2, testTriangle3]);
    })
})

describe ('Scalene class', function () {
    let scalene1 = new Scalene(15, 34, 32);
    let scalene2 = new Scalene(5, 12, 9);
    let nonScalene = new Scalene(5, 5, 5);
    let invalidTriangle = new Scalene(2, 3, 1);

    it('Should inherit side1, side2, side3 from the Triangle class, and have the isValidTriangle property derived from the hasValidSideLengths method.', function () {
        expect(scalene1.side1).to.equal(15);
        expect(scalene2.side2).to.equal(12);
        expect(nonScalene.side3).to.equal(5);
        expect(scalene1.isValidTriangle).to.be.true;
        expect(invalidTriangle.isValidTriangle).to.be.false;
    })

    it('Should have the instance method isScalene() that returns true if it is a valid scalene triangle, and false if it is not.', function () {
        expect(scalene1.isScalene()).to.be.true;
        expect(nonScalene.isScalene()).to.be.false;
        expect(invalidTriangle.isScalene()).to.be.false;
    })

    it('Should have the instance method validate() that adds an isValidScalene property of either true or false depending on the result of calling isScalene(). This should override the parent method.', function () {
        scalene1.validate();
        scalene2.validate();
        nonScalene.validate();
        invalidTriangle.validate();

        expect(scalene1.isValidScalene).to.be.true;
        expect(scalene2.isValidScalene).to.be.true;
        expect(nonScalene.isValidScalene).to.be.false;
        expect(invalidTriangle.isValidScalene).to.be.false;
        expect(scalene1.isValid).to.equal(undefined);
        expect(invalidTriangle.isValid).to.equal(undefined);
    })
})

describe ('Isoceles class', function () {
    let isoceles1 = new Isoceles(7, 7, 3);
    let isoceles2 = new Isoceles(3, 2, 2);
    let nonIsoceles = new Isoceles(5, 5, 5);
    let invalidTriangle = new Isoceles(2, 3, 1);

    it('Should inherit side1, side2, side3 from the Triangle class, and have the isValidTriangle property derived from the hasValidSideLengths method.', function () {
        expect(isoceles1.side1).to.equal(7);
        expect(isoceles2.side2).to.equal(2);
        expect(nonIsoceles.side3).to.equal(5);
        expect(isoceles1.isValidTriangle).to.be.true;
        expect(invalidTriangle.isValidTriangle).to.be.false;
    })

    it('Should have the instance method isIsoceles() that returns true if it is a valid isoceles triangle, and false if it is not.', function () {
        expect(isoceles1.isIsoceles()).to.be.true;
        expect(nonIsoceles.isIsoceles()).to.be.false;
        expect(invalidTriangle.isIsoceles()).to.be.false;
    })

    it('Should have the instance method validate() that adds an isValidScalene property of either true or false depending on the result of calling isScalene(). This should override the parent method.', function () {
        isoceles1.validate();
        isoceles2.validate();
        nonIsoceles.validate();
        invalidTriangle.validate();

        expect(isoceles1.isValidIsoceles).to.be.true;
        expect(isoceles2.isValidIsoceles).to.be.true;
        expect(nonIsoceles.isValidIsoceles).to.be.false;
        expect(invalidTriangle.isValidIsoceles).to.be.false;
        expect(isoceles1.isValid).to.equal(undefined);
        expect(invalidTriangle.isValid).to.equal(undefined);
    })
})

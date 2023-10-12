const { expect } = require('chai')
const Person = require('../problems/person')

describe ('Person class', function () {
    let john = new Person('John', 23);
    it('Should take in name and age arguments, and set these as properties on an instance of the Person class.', function () {
        expect(john.name).to.equal('John');
        expect(john.age).to.equal(23);
    })

    it("Should have the instance method sayHello() that returns a string of 'Hello, (person's name).'", function () {
        expect(john.sayHello()).to.equal("Hello, John.");
    })

    it('Should have the instance method visit(otherPerson) that returns a string stating "(this instance) visited (passed in person)" ex. mai.visit(erin) should return "Mai visited Erin"', function () {
        let joe = new Person('Joe', 24);
        expect(john.visit(joe)).to.equal('John visited Joe');
    })

    it('Should have the instance method switchVisit(otherPerson) that returns a string stating "(passed in person) visited (this instance)" ex. mai.siwtchVisit(erin) should return "Erin visited Mai"', function () {
        let joe = new Person('Joe', 24);
        expect(john.switchVisit(joe)).to.equal('Joe visited John');
    })

    it('Should have the instance method update(obj) that checks if the obj argument is a valid object, and if so, can update the name and age properties of the object. If the incoming argument is not an object, or does not have an name or age property, throw a TypeError.', function () {
        let validObj = new Person('Joe', 24);

        validObj.update({ name: "Jimmy", age: 34 });

        expect(validObj.name).to.equal("Jimmy");
        expect(validObj.age).to.equal(34);
        expect(() => validObj.update({ name: "Jimmy" })).to.throw(TypeError);
        expect(() => validObj.update(34)).to.throw(TypeError);
    })

    it('Should have the instance method tryUpdate(obj). This method calls update, if update is successful, true should be returned. If update is not successful, it should NOT throw and error, and return false.', function () {
        let validObj = new Person('Joe', 24);

        expect(validObj.tryUpdate({ name: "Jimmy", age: 34 })).to.be.true;
        expect(validObj.tryUpdate({ name: "Jimmy" })).to.be.false;
        expect(validObj.tryUpdate(34)).to.be.false;
    })

    it('Should have the static method greetAll(obj). This will intake an array of Person instances, then call sayHello() on each instance, storing each return string in an array. Finally, it will return the array of strings.', function () {
        let jim = new Person("Jim", 24);
        let bob = new Person("Bob", 44);
        let amber = new Person("Amber", 52);
        let sally = new Person("Sally", 23);

        let personArr = [jim, bob, amber, sally];

        expect(Person.greetAll(personArr)).to.eql(['Hello, Jim.', 'Hello, Bob.', 'Hello, Amber.', 'Hello, Sally.']);
    })
})

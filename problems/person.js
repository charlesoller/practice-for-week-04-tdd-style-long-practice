class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  static greetAll(obj){
    let returnArr = [];
    obj.forEach(person => {
      returnArr.push(person.sayHello());
    })

    return returnArr;
  }

  sayHello() {
    return `Hello, ${this.name}.`;
  }

  visit(otherPerson){
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson){
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj){
    if(obj.name === undefined || obj.age === undefined || typeof obj !== 'object'){
      throw new TypeError('obj must be a valid object with name and age properties.')
    } else {
      this.name = obj.name;
      this.age = obj.age;
    }
  }

  tryUpdate(obj){
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = Person;

function myMap(inputArray, callback) {
  let returnArr = [];
  inputArray.forEach(item => {
    returnArr.push(callback(item));
  })
  return returnArr;

  // return inputArray.map(x => callback(x))
}

module.exports = myMap;

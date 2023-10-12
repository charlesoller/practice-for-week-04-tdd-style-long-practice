function returnsThree() {
  return 3
}

function reciprocal(n) {
  if (n < 1 || n > 1000000 ) {
    throw new RangeError("Input must be greater than 1 or less than 1000000");
  }
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};

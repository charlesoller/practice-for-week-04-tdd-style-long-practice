function returnsThree() {
  return 3
}

function reciprocal(n) {
  if (n < 1 || n > 1000000 ) {
    throw new RangeError("input must be less than 1 or greater than a million");
  }
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};

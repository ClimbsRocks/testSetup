module.exports = {
  multiply: function(a,b) {
    return a * b;
  },
  power: function(base, exponent) {
    return Math.pow(base, exponent);
  },
  lowestCommonDenominator: function(a,b) {
    for(var i = 2; i < Infinity; i++) {
      // console.log(i);
      // console.log(a,b);
      if((a % i === 0) && (b % i === 0)) {
        return i;
      }
    }
  }
};

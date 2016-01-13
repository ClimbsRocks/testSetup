var expect = require('chai').expect;
var mocha = require('mocha');
var testObj = require('./logicFile.js');
var asyncObj = require('./asyncFile.js')

describe('this is our outer block', function() {

  describe('this is our more granular inner block testing only one part of our application', function() {
    it('should correctly divide two positive numbers', function() {
      expect(testObj.multiply(8,4)).to.equal(32);
    });
  });

  describe('reading in async files', function() {
    var allData;

    before(function(done) {
      asyncObj(function(data) {
        allData = data;
        done();
      });
    });

    it('should have words in the file!', function() {
      expect(allData).to.have.length.above(5);
      console.log('here is the result from allData:',allData);
    });
  });

  describe('a bunch of math functions', function() {
    var x = 0;
    beforeEach(function() {
      x++;
      console.log('just incremented x inside beforeEach', x);
    });

    it('should know that anything to the 0th power is 1', function() {
      expect(testObj.power(x,0)).to.equal(1);
    });

    it('should know that all the lowest common denominator of all even numbers is 2', function() {
      expect(testObj.lowestCommonDenominator(x,28)).to.equal(2);
    });
  });
});

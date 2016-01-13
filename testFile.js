var expect = require('chai').expect;
var mocha = require('mocha');
var testObj = require('./logicFile.js');

describe('this is our outer block', function() {

  describe('this is our more granular inner block testing only one part of our application', function() {
    it('should correctly divide two positive numbers', function() {
      expect(testObj.multiply(8,4).to.equal(32));
    });
  });
});

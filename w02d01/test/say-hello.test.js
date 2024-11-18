// const assert = require('node:assert');
const assert = require('chai').assert;
const { sayHello, sayHelloToUser } = require('../say-hello');

// function assertEqual(actual, expected) {
//   if (actual !== expected) {
//     console.log('Assertion failed ❌', actual, expected);
//     return;
//   }

//   console.log('Assertion passed ✅', actual, expected);
// }

// // SAYHELLO
// // Manual testing
// assertEqual(sayHello(), 'Hello!');

// // Console assert testing
// console.assert(
//   sayHello() === 'Goodbye!',
//   'Assertion failed, actual diff than expected'
// );

// // Using assert from nodejs
// assert.equal(sayHello(), 'Hello!');

// // SAYHELLOTOUSER
// // Manual testing
// assertEqual(sayHelloToUser('Pedro'), 'Hello Pedro!');

// // Console assert testing
// console.assert(
//   sayHelloToUser('Pedro') === 'Hello Pedro!',
//   'Assertion failed, actual diff than expected'
// );

// // Using assert from nodejs
// assert.equal(sayHelloToUser('Pedro'), 'Hello Pedro!');

describe('sayHello', function () {
  describe('#sayHello', function () {
    it('should return Hello! when invoked', function () {
      const actual = sayHello();
      const expected = 'Hello!';
      assert.equal(actual, expected);
    });
  });

  describe('#sayHelloToUser', function () {
    it('should return Hello Pedro! when invoked with Pedro as an argument', function () {
      const actual = sayHelloToUser('Pedro');
      const expected = 'Hello Pedro!';
      assert.equal(actual, expected);
    });

    it('should return Hello Gustavo! when invoked with Gustavo as an argument', function () {
      const actual = sayHelloToUser('Gustavo');
      const expected = 'Hello Gustavo!';
      assert.equal(actual, expected);
    });
  });
});

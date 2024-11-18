const assert = require('node:assert');
const { sayHello, sayHelloToUser } = require('../say-hello');

function assertEqual(actual, expected) {
  if (actual !== expected) {
    console.log('Assertion failed ❌', actual, expected);
    return;
  }

  console.log('Assertion passed ✅', actual, expected);
}

// SAYHELLO
// Manual testing
assertEqual(sayHello(), 'Hello!');

// Console assert testing
console.assert(
  sayHello() === 'Goodbye!',
  'Assertion failed, actual diff than expected'
);

// Using assert from nodejs
assert.equal(sayHello(), 'Hello!');

// SAYHELLOTOUSER
// Manual testing
assertEqual(sayHelloToUser('Pedro'), 'Hello Pedro!');

// Console assert testing
console.assert(
  sayHelloToUser('Pedro') === 'Hello Pedro!',
  'Assertion failed, actual diff than expected'
);

// Using assert from nodejs
assert.equal(sayHelloToUser('Pedro'), 'Hello Pedro!');

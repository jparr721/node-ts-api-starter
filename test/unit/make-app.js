require('ts-node/register');
const makeApp = require('../../../src/api/make-app');

describe('api - makeApp', () => {
  it ('should be a function', () => {
    expect(makeApp).to.be.a.function();
  });

  it ('should make an express HTTP app', () => {
    expect(makeApp()).to.be.a.function();
  });
});

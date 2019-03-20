require('ts-node/register');
const makeRouter = require('../../../src/api/make-router');

describe('api - makeRouter', () => {
  it ('should be a function', () => {
    expect(makeRouter).to.be.a.function();
  });

  it ('should return an express promise router', () => {
    const dependencies = {
      fakeRoute1: () => {},
      fakeRoute2: () => {},
    };

    expect(makeRouter(dependencies)).to.be.a.function();
  });
});

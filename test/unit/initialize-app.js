require('ts-node/register');
const initializeApp = require('../../../src/api/initialize-app');
const express = require('express');


describe('src - initializeApp', () => {
  it ('should be a function', () => {
    expect(initializeApp).to.be.a.function();
  });

  it ('should return a constructed api object', () => {
    const app = express();
    const middlewares = [
      () => bodyParser.json(),
      () => bodyParser.urlencoded({ extended: false, limit: '5mb' }),
      () => logger(customLogFormat),
      () => compression(),
      () => cookieParser(),
      () => cors(),
      () => makeRouter(),
    ];

    middlewares.forEach((m) => {
      app.use(m());
    });

    app.use('*', (req, res, next) => {
      res.send('Route does not exist');
    });

    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Internal server error');
    });

    const testApp = express();
    testApp = initializeApp(testApp);

    expect(_.isEqual(testApp, app)).to.be.true();
  });
});

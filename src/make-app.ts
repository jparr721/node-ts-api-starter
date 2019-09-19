import express from 'express';


export default function makeApp() {
  const app = express();

  // For security reasons, remove this
  app.disable('x-powered-by');

  // Make routing strict to avoid mangling at runtime
  app.enable('strict-routing');
  app.enable('case sensitive routing');

  return app;
}

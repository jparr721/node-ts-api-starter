import express from 'express';
import responseDecorators from './middleware/response-decorators';
import sampleroute from './routes/sample';
import { respond } from './controllers/controller';

export default function makeApiRouter() {
  const router = express.Router();

  router.use(responseDecorators);

  router.use('/sample', sampleroute);

  return router;
}

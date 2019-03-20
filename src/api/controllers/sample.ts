import { Request, Response, NextFunction } from 'express';
import * as controller from './controller';


function sample(req: Request, res: Response, next: NextFunction) {
  const helloWorld = async () => {
    return "hello world!";
  }

  controller.next(helloWorld(), req, res, next);
}

export = {
  sample,
}

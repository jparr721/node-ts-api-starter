import isUndefined from 'lodash/isUndefined';
import { Request, Response, NextFunction } from 'express';


export function respond(req: Request, res: any) {
  if (isUndefined(res.getHeader('Content-Type'))) {
    res.setHeader('Content-Type', 'application/json');
  }

  if (!req.route) {
    res.status(404).json({ 404: 'Resource does not exist' });
  }

  if (req.statusCode !== 204 && !res.body) {
    res.status(204).end();
    return;
  }

  res.json(res.body);
}

export function next(promise: Promise<any>, req: Request, res: Response, next: NextFunction) {
  promise.then(response => {
    res.status(200).send(response);
    next();
  }).catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
}

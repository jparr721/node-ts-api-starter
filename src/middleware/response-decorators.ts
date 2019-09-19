import { Request, Response, NextFunction } from 'express';
import boom from 'boom';

export default function responseDecorators(req: Request, res: any, next: NextFunction) {
  function respond(res: Response, payload?: object) {
    res.send(payload);
  };

  function errorResponse(res: Response, payload: any) {
    if (payload.isBoom) {
      payload = payload.output.payload;
    }

    res.send(payload);
  };

  res.ok = function okResponse(data: object, meta: object) {
    return respond(res.status(200), { data, meta });
  };

  res.created = function createdResponse(data: object, meta: object) {
    return respond(res.status(201), { data, meta });
  };

  res.noContent = function noContentResponse() {
    return respond(res.status(204));
  };

  res.deleted = function deleteResponse() {
    return res.noContent();
  };

  res.notFound = function notFoundResponse(message: string, data: object) {
    return errorResponse(res.status(404), boom.notFound(message, data));
  };

  res.conflict = function conflictResponse(message: string, data: object) {
    return errorResponse(res.status(409), boom.conflict(message, data));
  };

  res.badData = function badDataResponse(message: string, data: object) {
    return errorResponse(res.status(422), boom.badData(message, data));
  };

  res.badRequest = function badRequestResponse(message: string) {
    return errorResponse(res.status(400), boom.badRequest(message))
  };

  res.error = function internalErrorResponse(message: string, data: object) {
    return errorResponse(res.status(500), boom.internal(message, data));
  };

  next();
}

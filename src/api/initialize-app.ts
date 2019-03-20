import { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import makeRouter from './make-router';

const customLogFormat = (tokens: any, req: Request, res: Response) => {
  const logObj = {
    app_name: `APP_NAME_HERE`,
    timestamp: tokens.date(req, res, 'clf'),
    request_ip: tokens['remote-addr'](req, res),
    request_user: tokens['remote-user'](req, res),
    request_method: tokens.method(req, res),
    request: tokens.url(req, res),
    response_status: tokens.status(req, res),
    request_bytes_sent: tokens.res(req, res, 'content-length'),
    http_referrer: tokens.referrer(req, res),
    request_user_agent: tokens['response-time'](req, res),
    response_time: tokens['response-time'](req, res),
    request_id: req.headers['x-request-id'],
    server_name: req.headers.host,
    ui_app_name: req.get('AppName'),
    ui_app_version: req.get('AppVersion'),
    ui_app_platform: req.get('AppPlatform'),
  }

  return JSON.stringify(logObj);
};

export default function intializeApp(apiApp: any) {
  console.log('Now initializing api server...');

  const middlewares = [
    () => bodyParser.json(),
    () => bodyParser.urlencoded({ extended: false, limit: '5mb' }),
    () => logger(customLogFormat),
    () => compression(),
    () => cookieParser(),
    () => cors(),
    () => makeRouter(),
  ];

  middlewares.forEach((m: Function): void => {
    apiApp.use(m());
  });

  apiApp.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send('Internal server error');
  });

  return apiApp;
}

import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

export default function requestNotFoundMiddleware(request: Request, response: Response, next: NextFunction) {
    next(new HttpException(404, 'Request not found'));
};
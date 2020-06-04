import { Router, NextFunction, Request, Response } from "express";
import { Queries } from "../db/queries";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt-nodejs";
import HttpException from '../exceptions/HttpException';
import { JWT_SECRET } from "../util/secrets";

const queries: Queries = new Queries();

export class AuthRoutes {

    router: Router;
    public queries: Queries = new Queries();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post("/register", (req: Request, res: Response, next: NextFunction) => {
            const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
            queries.insert(req.body.email, hashedPassword).then(
                () => {
                    res.status(200).send({ message: "success" });
                }
            ).catch((e: any) => {
                if (e.detail) {
                    next(new HttpException(500, e.detail));
                } else {
                    next(new HttpException(500, e));
                }
            });;
        });

        this.router.post("/login", function (req: Request, res: Response) {
            queries.find(req.body.email).then((user: any) => {
                if (user.length == 0) {
                    res.status(401).send({ message: `username ${req.body.email} not found.` });
                }
                else {
                    bcrypt.compare(req.body.password, user[0].password, (err: Error, isMatch: boolean) => {
                        if (isMatch) {
                            const token = jwt.sign({ email: req.body.email, scope: req.body.scope }, JWT_SECRET);
                            res.status(200).send({ token: token });
                        }
                        else {
                            res.status(401).send({ message: "Invalid username or password." });
                        }
                    });
                }
            });
        });;

    }
}
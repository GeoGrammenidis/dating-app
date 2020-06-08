import { Router, NextFunction, Request, Response } from "express";
import { Queries } from "../db/queries";
import passport from "passport";
import "../middleware/passportHandler.middleware";

const queries: Queries = new Queries();

export class RequestRoutes {
    router: Router;
    public queries: Queries = new Queries();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/show", passport.authenticate('jwt', { session: false }), function (req: Request, res: Response) {
            let myuser = <[{ id: number }]>req.user;
            queries.getAll(myuser[0].id).then((users: any) => {
                res.status(200).send(users);
            })
        });;

        this.router.post("/block", passport.authenticate('jwt', { session: false }), function (req: Request, res: Response) {
            let myuser = <[{ id: number }]>req.user;
            queries.block(myuser[0].id, req.body.block_id).then(() => {
                res.status(200).send("blocked successfully");
            })
        });;

        this.router.post("/like", passport.authenticate('jwt', { session: false }), function (req: Request, res: Response) {
            let myuser = <[{ id: number }]>req.user;
            queries.like(myuser[0].id, req.body.picture_id).then(() => {
                res.status(200).send("liked successfully");
            })
        });;

        this.router.post("/notification", passport.authenticate('jwt', { session: false }), function (req: Request, res: Response) {
            queries.notification(req.body.like_id).then((user_liked: any) => {
                res.status(200).send(user_liked);
            })
        });;
    }
}
import passport from "passport";
import passportJwt from "passport-jwt";
import { JWT_SECRET } from "../util/secrets";
import { Queries } from "../db/queries";

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const queries = new Queries();

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET
    }, function (jwtToken, done) {
        queries.find(jwtToken.email).then((user: any) => {
            if (user.length == 1) {
                return done(undefined, user, jwtToken);
            } else {
                return done(undefined, false);
            }
        });
    })
);
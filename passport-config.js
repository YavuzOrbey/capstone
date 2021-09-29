import { Strategy as LocalStrategy } from 'passport-local';
import { User } from './models/user.model.js';
import bcrypt from 'bcrypt';
export const initialize = (passport) => {
    const authenticateUser = (email, password, done) => {
        console.log("in authenticate middleware");
        User.findOne({ email })
            .then((user) => {
            //if there isn't a user with that email in the database 
            if (!user) {
                return done(null, false, { message: 'Invalid Credentials' });
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    return done(null, user, { message: 'Welcome Back' }); //err, user, info
                }
                else
                    return done(null, false, { message: 'Invalid Credentials' });
            });
        }).catch((err) => {
            return done(err, false, { message: "Couldn't find user" });
        });
    };
    //yup validation
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser)); //needs both email AND password (default usernameField, passwordField) to even hit the authenticateUser
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            const userInfo = {
                email: user.email,
                isAdmin: user.isAdmin
            };
            done(err, userInfo);
        });
    });
};

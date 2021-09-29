import {Strategy as LocalStrategy} from 'passport-local'
import {User} from './models/user.model.js'
import bcrypt from 'bcrypt'
import { PassportStatic } from 'passport'

//looks like I need this part 
declare global {
    namespace Express {
      interface User {
        _id?: number;
      }
    }
  }
export const initialize = (passport:PassportStatic) => {

    const authenticateUser = (email:any,password:string,done:any) => {
        console.log("in authenticate middleware")
        User.findOne({email})
        .then((user:any)=>{
            //if there isn't a user with that email in the database 
            if(!user){
                return done(null, false, {message: 'Invalid Credentials'})
            }
            bcrypt.compare(password, user.password, function(err, result) {
                    if(result){
                        return done(null, user, {message: 'Welcome Back'} ) //err, user, info
                    }
                    else
                    return  done(null, false, {message: 'Invalid Credentials'})
                })
        }).catch((err:any)=>{ //if something went wrong with the database
            return done(err, false, {message: "Couldn't find user"})})

    }
    //yup validation
    passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'}, authenticateUser)) //needs both email AND password (default usernameField, passwordField) to even hit the authenticateUser
    passport.serializeUser(function(user, done) {
        done(null, user._id);
      });
      
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err:any, user:any) {
        const userInfo = {
          email: user.email,
          isAdmin: user.isAdmin
        }
        done(err, userInfo);
      });
    });
}


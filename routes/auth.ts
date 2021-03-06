import express, {Request, Response} from 'express';
import passport from 'passport'
const router = express.Router(); //mini app
import {User} from '../models/user.model.js'
import {UserDoc} from '../interfaces.types/UserDoc'
import bcrypt from 'bcrypt'
import validator from 'email-validator'
import Message from '../interfaces.types/MessageType'
export const isAuthenticated = (req,res,next)=> {
    req.isAuthenticated() ? next() : res.status(401).json("You have to log in to view this page");//res.sendStatus(401);
}
const authenticate = (req:Request,res:Response,next)=> {
    passport.authenticate('local', (err,user,info)=>{
        if (err) throw err;//{ return next(err); }
        if (!user) { 
            let message: Message = {type: "danger", text: info.message}
            res.status(401);
            res.send(message);//res.end(info.message);
            //return;
        }
        if(user){
                req.logIn(user, (err:any)=>{
                    if(err) throw err;
                    const userInfo = {
                        email: user.email,
                        isAdmin: user.isAdmin
                      }
                    res.status(200).send({user: userInfo, message: info.message});
                })
                return;
        }
    })(req,res,next)
}
router.route("/login").post(authenticate);

router.route("/logout").get((req,res)=> {
    console.log("trying to log out on server")
    req.session.destroy(function (err) {
        res.json("DONE");
    });
});
    //req.logout();

router.route("/").delete((req,res)=>{
    console.log(req.user)
    if(req.user){
        console.log("inside delete")
        User.findByIdAndDelete(req.user._id)
        .then(()=>res.json("User deleted"))
        .catch((err:any)=>res.status(400).json('Error ' + err))
    }
})

router.route('/register').post((req,res)=>{
    const {email, password} = req?.body
    //first check if email already exists in DB and if it does return flash message informing user
    //console.log(User.schema)
    if(!validator.validate(email)){
        let message:Message = {type: "danger", text: "Must use a valid email"}
        return res.status(200).json(message)
    }

    console.log('inside register')
    // User.findOne({email}).then((user)=>console.log(user)).catch(err=>console.error(err))
    User.findOne({ email}, function (err:Error, user:UserDoc) {
        if(err) throw err;
        
        if(!user){


            const saltRounds = 10;
        
            bcrypt.hash(password, saltRounds, function(err, hash) {
                // Store hash in your password DB.
                const newUser = new User({email, password:hash})

                newUser.save()
                .then(()=>{
                    let message:Message = {type: "success", text: "User added!"}
                    return res.json(message);
                )
                .catch(saveErr=>{
                    console.log(saveErr)
                    
                    return res.status(400).json('Error ' + saveErr)
                })
            });
        }
        else{
            return res.status(200).json({type: "error", message: "User already exists!"})
        }}
        );
    
    
})

router.route("/user").get((req, res) => {
    res.json({user: req.user ? req.user: null});
} );/*

*/
export {router}
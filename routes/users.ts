import express from 'express';
import {User} from '../models/user.model.js'
import { isAuthenticated } from './auth.js';

const router = express.Router(); //mini app

/* function isAuthenticated(req, res, next) {
    // do any checks you want to in here
  
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    console.log("line11", req.user)
    console.log("line11", req.user.authenticated)
    if (req.user)
        return next();
    else
        return res.json("NOPE")
    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    //res.redirect('/');
  } */
router.route("/").get(isAuthenticated, (req,res)=>{
    console.log("inside /users route req.user:", req.user)
    User.find()
    .then((users:any)=>res.json(users))
    .catch((err:any)=>res.status(400).json("Error: " + err))
})



router.route("/:id").get((req,res)=>{
    User.findById(req.params.id)
    .then((user:any)=>res.json(user))
    .catch((err:any)=>res.status(400).json('Error ' + err))
})
router.route("/:id").delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json("User deleted"))
    .catch((err:any)=>res.status(400).json('Error ' + err))
})

router.route("/:id").put((req, res)=>{
    User.findByIdAndUpdate(req.params.id, {email: req.body.email})
    .then(()=>res.json("User updated"))
    .catch((err:any)=>res.status(400).json('Error ' + err))
})


export {router}
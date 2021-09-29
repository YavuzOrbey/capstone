import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { initialize as initializePassport } from './passport-config.js';
import { router as usersRouter } from './routes/users.js';
import { router as authRouter } from './routes/auth.js';
/* if(process.env.NODE_ENV!=='production'){
    dotenv.config();
} */
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 5000;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
const corsOptions = {
    origin: `http://localhost:${process.env.CLIENT_PORT}`,
    credentials: true, //access-control-allow-credentials:true
};
//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);
const uri = process.env.MONGODB_URI;
mongoose.connect(uri); // {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true} as ConnectOptions
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established');
});
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

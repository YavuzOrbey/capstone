import "bootstrap/dist/css/bootstrap.min.css"
import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' //EMPHASIS YOU CANNOT/SHOULD NOT import the reduce store into react components
import NavbarCustom from './Navbar';
import Register from './Register'
import ViewUsers from './ViewUsers'
import Login from "../Pages/Login";
import {Home} from "../Pages/Home"
import Dashboard from '../Pages/Dashboard'
import Questions from "../Pages/Questions";
import BlankPage from '../Pages/BlankPage'
import {
    changeUser,
    logoutUser,
    selectUser
  } from '../redux/features/user/userSlice'
import { Counter } from "./Counter";
import { Profile } from "../Pages/Profile";
import axios from "axios";
import MyComponent from "./MyComponent";
import CreateQuestion from "./CreateQuestion";
import { selectMessage } from "../redux/features/flashmessage/flashMessageSlice";
import FlashMessage from "./FlashMessage";
import Demo from './Demo'
export const App = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const [timer, setTimer] = useState(1);
    const getUser = () => {
        console.log('app refreshed')
        axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/auth/user`, {
            withCredentials: true
        }).then(res => {
            console.log("getUser: res.data", res.data)
            dispatch(changeUser(res.data.user))
        })
    }

    useEffect(getUser, []);
    useEffect(()=>{
        console.log("user changed")
    },[user]);
    
    setTimeout(()=>{
        setTimer(0);
    }, 10000)
    return  <Router><div className="container">
    <NavbarCustom />
    <FlashMessage />
    <br />
    <Route exact path="/">
        {user ? <Redirect to="/dashboard" /> : <Home />}
    </Route>
    {!user ? <>
        <Route path="/login" >
        <div><Login /></div>
        </Route>
        <Route path="/logout">
        </Route>
        <Route path="/register" >
            <Register />
        </Route></>: <>
        <Route path="/dashboard">
            <Dashboard />
        </Route>

        <Route path="/profile" >
            <Profile />
        </Route>
        <Route path="/users"  >
            <ViewUsers />
        </Route>

        <Route path="/users/:id" >
            <Profile />
        </Route>
        <Route path="/counter">
            <Counter />
        </Route>
        <Route path="/create-question">
            <CreateQuestion />
        </Route>
        <Route path="/questions">
            <Questions />
        </Route>
        <Route path="/demo">
            <Demo />
        </Route>
        </>

    }

    
    </div></Router>
}
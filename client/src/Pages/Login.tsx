import { useEffect, useState } from "react";
import axios from "axios";
import FlashMessage from "../components/FlashMessage";
import Message from "../types/Message";
import {
    changeUser
  } from '../redux/features/user/userSlice'
import { useDispatch } from 'react-redux'
const Login = () => {
    console.log(process.env.REACT_APP_SERVER_PORT)
   /*  document.cookie = 'name=Paul;expires=' + new Date(2021, 8,21).toUTCString()

    console.log(document.cookie)
    sessionStorage.setItem("name", "yavuz")
    sessionStorage.getItem("name") */
    const [state, setState] = useState({email: "", password: ""})
    /* const [flashMessage, setFlashMessage] = useState({} as Message); */
    const dispatch = useDispatch()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(state!==null){
            axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/auth/login`, state,  { withCredentials: true })
            .then(res => {
              /*   setFlashMessage({type: "success", message: res.data.message}) */
                dispatch(changeUser(res.data.user))
                
            }).catch(err=>{
                console.log(err.response.data)
                /* setFlashMessage({type: "danger", message: err.response.data}) */
            }).finally(/* ()=>{
                setTimeout(()=>
                setFlashMessage(null),3000)
            } */);
        
        }
    
    }
    
const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
        email: e.currentTarget.value,
        password: state.password
    });
}
const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
        email: state.email,
        password:  e.currentTarget.value
        
    });
}
return (<div>
<form action="#" onSubmit={handleSubmit}>
     {/* {flashMessage && <FlashMessage flashMessage={flashMessage} /> } */}
        <h3>Login</h3>
        <div className="mb-3 row">
            <div className="col-md-6">
                <label className="col-sm-2 col-form-label">Email</label>
                <input type="text" className="form-control" onChange={onChangeName}/>
            </div>
        </div>
        <div className="mb-3 row">
            <div className="col-md-6">
            <label className="col-sm-2 col-form-label">Password</label>
            <input className="form-control" type="password" onChange={onChangePassword}/>
            </div>
        </div>
        <button>Login</button>

    </form>
    </div>)
}
export default Login
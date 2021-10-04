import React, {useState} from 'react';
import axios from 'axios';
import FlashMessage from './FlashMessage';
import { useDispatch } from 'react-redux';
import {changeMessage} from '../redux/features/flashmessage/flashMessageSlice';
type User = {
    email: string;
    password: string;
} | null
const Register = ()=> {
const dispatch = useDispatch();
const [state, setState] = useState({email: "", password: ""})
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(state!==null){
        axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/auth/register`, state)
        .then(res => {
            dispatch(changeMessage(res.data))
            console.log(res.data)
            //setFlashMessage(res.data)
        }).catch(err=>console.log(err))
    
    }

}

const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
        ...state,
        email: e.currentTarget.value,
    });
}
const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
        ...state,
        password:  e.currentTarget.value
        
    });
}
return <div>
    {/* {flashMessage && <FlashMessage flashMessage={flashMessage} /> } */}
    <h3>Register</h3>
    <form action="#" onSubmit={handleSubmit}>
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
        <button>Register</button>

    </form>



</div>}
export default Register;
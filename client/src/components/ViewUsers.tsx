import { useEffect,useState } from "react"
import axios from "axios"
import FlashMessage from "./FlashMessage";
import Message from "../types/Message";

type User = {
    _id: string,
    email:string;
    createdAt: string;
}
const ViewUsers = () => {
    const [users,setUsers]:[User[], any] = useState([])
    const [flashMessage, setFlashMessage] = useState({} as Message);
    useEffect(()=>{
        axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT }/users`, { withCredentials: true }) //if we didn't have that credientials object server wouldnt get user
        .then(res => {
            setUsers(res.data)

        }).catch(err=>{
            setFlashMessage({type: "danger", message: err.response.data})
            
        }).finally(()=>console.log("Finally"))
    }, [])


    const table = <table className='table'>
        <thead><tr>
            <th scope='col'>Email</th>
            <th>Sign Up Date</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr></thead>
        <tbody>
        {users.map((user)=> {
        const creationDate = new Date(user.createdAt)
        return <tr key={user._id}><td>{user.email}</td>
            <td>{`${creationDate.getMonth()}/${creationDate.getDay()}/${creationDate.getFullYear()}`}</td>
            <td>Edit</td>
            <td><button onClick={()=>handleDelete(user._id)}>Delete</button></td>
            </tr>})}
        </tbody>
        </table>
    
    const handleDelete = (id:string)=>{
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(res => {
            console.log(res.data)
            //at this point I need to get that thing I deleted from the database deleted from the users array
            // could just do another get request to server or adjust the array 
            const newUsers = users.filter((user)=>user._id!==id)
            setUsers(newUsers)
        }).catch(err=>console.log(err))
    }
    return <div> {flashMessage && <FlashMessage flashMessage={flashMessage} /> }{users.length===0 ?<div>Loading...</div> : table}</div>
}

export default ViewUsers
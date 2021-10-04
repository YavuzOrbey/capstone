import axios from "axios"

const Dashboard = () => {

    const handleDelete = ()=>{
        axios.delete(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/auth`)
        .then(res => {
            console.log(res.data)
        }).catch(err=>console.log(err))
    }
return <><button className="btn btn-outline-danger" onClick={()=>handleDelete()}>Delete Account</button></>
}
export default Dashboard
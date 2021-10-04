import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/animations.css"
import { clearMessage, selectMessage } from "../redux/features/flashmessage/flashMessageSlice";
const FlashMessage = () => {
    const [animation, setAnimation] = useState("")
    const message = useSelector(selectMessage);
    console.log("message",message)
    const dispatch = useDispatch() 
    useEffect(()=>{

        setAnimation("fade-in")

        return function cleanup() {
        console.log("Flash Message unmounted")
        }
    },[])

   /*  useEffect(()=>{
/*         setTimeout(()=> {
            console.log("trying to clear message");
            dispatch(clearMessage())
        },3000) 

    }, [message]) */
    return <div className={`alert alert-${message.type} ${animation}`} >{message.text}</div>
}

export default FlashMessage;
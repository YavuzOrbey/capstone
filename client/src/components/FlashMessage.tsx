import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "../css/animations.css"
import { selectMessage } from "../redux/features/flashmessage/flashMessageSlice";
const FlashMessage = () => {
    const [animation, setAnimation] = useState("")
    const message = useSelector(selectMessage);
    useEffect(()=>{

        setAnimation("fade-in")

        return function cleanup() {
        console.log("Flash Message unmounted")
        }
    },[])
    return <div className={`alert alert-${message.type} ${animation}`} style={{opacity: 0} }>{message.text}</div>
}

export default FlashMessage;
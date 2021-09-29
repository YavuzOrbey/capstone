import { useEffect, useState } from "react";

import "../css/animations.css"
const FlashMessage = ({flashMessage}: {flashMessage: {type:string, message:string}}) => {
    const [animation, setAnimation] = useState("")
    useEffect(()=>{

        setAnimation("fade-in")

        return function cleanup() {
        console.log("Flash Message unmounted")
        }
    },[])
    return <div className={`alert alert-${flashMessage.type} ${animation}`} style={{opacity: 0}}>{flashMessage.message}</div>
}

export default FlashMessage;
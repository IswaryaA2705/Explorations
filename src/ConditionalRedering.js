import { useState } from "react";
function ConditionalRendering(){
    const[isSubscribed,setSubscribed] = useState(false)
    const handleClick=()=>{
        setSubscribed(prevState=>!prevState)
    }
    if(isSubscribed){
    return(
        <div>
            <button onClick={handleClick}>Subscribe</button>
            <h1>Hi Subscriber</h1>
        </div>
    )
}
else{
    return(
        <div>
            <button onClick={handleClick}>Subscribe</button>
            <h1>Hi Guest</h1>
        </div>
    )

}

}
export default ConditionalRendering;
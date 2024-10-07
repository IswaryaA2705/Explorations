import { useState } from "react";
function ConditionalRenderingEx(){
    const[isSubscribed,setSubscribed] = useState(false)
    const handleClick=()=>{
        setSubscribed(prevState=>!prevState)
    }
    let message;
    if(isSubscribed){
        message=<h1>Hi Subscriber</h1>
    }
    else
       message=<h1>Hi Guest</h1>
   return(
    <div>
        <button onClick={handleClick}>{isSubscribed?"Unsubscribe":"Subscribe"}</button>
        {isSubscribed?<h1>Hi Subscriber</h1>:<h1>Hi Guest</h1>}
        {isSubscribed && <h1>Hi Subscriber</h1>}
        {message}
    </div>
   )

}
export default ConditionalRenderingEx;
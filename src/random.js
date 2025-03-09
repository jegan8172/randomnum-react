import { useState } from "react";
function Random(){

    var [random,changedrandom] = useState("Click for Random Number")

    function randomnum(){
        changedrandom(Math.floor(Math.random()*10)+1)
    }
    return(<div style={{backgroundColor:"#f8f8ff",color:"red",padding:"20px",borderRadius:"10px",width:"400px"}}>
        <h1>{random}</h1>
        <button style={{backgroundColor:"black",color:"#f8f8ff"}} onClick={randomnum}>Random Number</button>
    </div>)
}
export default Random
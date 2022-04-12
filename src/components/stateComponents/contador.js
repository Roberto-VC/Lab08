import React, { useState, useEffect } from "react";

class Square extends React.Component{
         render(){
             return <button className ="squareBtn"></button>
    }
 }

export default function TodoAppHooks() {
    const [count, setCount] = useState(0);
    // Similar a componentDidMount y componentDidUpdate:
    useEffect(() => {
      // Actualiza el título del documento usando la Browser API
      console.log("cambio");
    });
  

    return (
        <>
           <div className = "turn">{count}</div>
           <button className ="squareBtn" onClick={() => setCount(count+1)}></button>
     
           <div className = "row">
             <Square onClick={() => setCount(count+1)}/>
             <Square onClick = {() => setCount(count+1)}/>
             <Square/>
           </div>
     
           <div className = "row" onClick={() => setCount(count+1)}>
           <Square/>
           <Square/>
           <Square/>
           </div>
     
           <div className = "row">
           <Square/>
           <Square/>
           <Square onClick={() => setCount(count+1)}></Square>
           </div>
     
           </>
     
         )
     }
     

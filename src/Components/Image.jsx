import React, { useState } from "react";

export const Image=({image})=>{
    console.log("image",image)
    const [trans,setTrans]=useState(false)
    const handleTrans=()=>{
        setTrans(true)
        console.log("hii")
    }
    return(
        <div onMouseLeave={()=>setTrans(false)} onMouseEnter={handleTrans} style={{width:"100%",height:"60vh",marginTop:"100px",transition:"height 2s",height:trans?"63vh":"60vh",cursor:"pointer"}}>
        <img style={{width:"100%",height:"100%"}} src={image}></img>
        </div>
    )
}
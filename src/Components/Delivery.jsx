import React, { useState } from "react";

export const Delivery=()=>{
    const [trans,setTrans]=useState(false)
    const handleTrans=()=>{
        setTrans(true)
        console.log("hii")
    }
    return(
        <div onMouseLeave={()=>setTrans(false)} onMouseEnter={handleTrans} style={{width:"100%",height:"15vh",border:"1px solid black",marginTop:"4px",transition:"width 2s",width:trans?"101%":"100%",cursor:"8520/8520/pointer"}}>
        <img style={{width:"100%",height:"100%"}} src="https://assets.ajio.com/medias/sys_master/images/images/h4e/he7/44369785487390/02092021-d-unisex-freedelivery-noontomidnight.jpg"></img>
        </div>
    )
}
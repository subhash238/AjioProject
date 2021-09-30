import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MoreDetail=()=>{
   const param=useParams()
   const [data,setData]=useState([])
   const [cart,setCart]=useState([])
   useEffect(()=>{
       fetch(`http://localhost:3001/items/${param.id}`)
       .then((res)=>res.json())
       .then((res)=>setData(res))
   },[])
   const handletoAdd=(data)=>{
    setCart([...cart,data])
    localStorage.setItem("cart",JSON.stringify(cart))
   }
   return(
       <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"50%",height:"80vh",marginTop:"40px",marginLeft:"150px"}}>
               <img src={data.img}></img>
               <p style={{marginLeft:"220px"}}>{data.view}</p>
            </div>
            <div style={{width:"30%",height:"80vh",marginTop:"90px"}}>
              <h1 style={{textAlign:"center",color:"orange",fontWeight:"bold",fontSize:"20px"}}>{data.Bond}</h1>
              <h3 style={{textAlign:"center"}}>{data.info}</h3>
              <h4 style={{textAlign:"center"}}>{data.offer}</h4>
              <p style={{textAlign:"center"}}>Rs.1,499(70%off)</p>
              <p style={{textAlign:"center"}}>ONE SIZE</p>
              <button onClick={()=>handletoAdd(data)} style={{marginLeft:"150px",background:"navy",color:"white"}}>ADD TO BAG &#128176;</button>
              <p style={{textAlign:"center"}}>HANDPICKED STYLES|ASSURED QUALITY</p>
              <button style={{marginLeft:"140px",background:"black",color:"white"}}>SAVE TO CLOSET &#128176;</button>
              <h6 style={{textAlign:"center"}}>PRODUCT DETAILS</h6>
              <p style={{textAlign:"center"}}>Product Code: 2567434684568</p>
            </div>
        </div>
   )
}
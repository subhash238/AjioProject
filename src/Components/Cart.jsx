import React, { useState } from "react";
let cart=JSON.parse(localStorage.getItem("cart"))
export const Cart=()=>{
    const[data,setData]=useState(cart)
    console.log("cart",data)
    let sum = data.reduce((acc, val) => {
        return acc+ val.cost;
      },0);
      console.log(data)
    return(
        <div style={{width:"100%",height:"100vh",marginTop:"90px",display:"flex",justifyContent:"space-between"}}>
          <div style={{width:"70%",height:"90%",marginLeft:"100px"}}>
            <h1>Total Cart value:{sum}</h1>
            {data.map((e)=>(
                <div style={{width:"100%",height:"20vh",display:"flex",justifyContent:"space-between"}}>
                   <img src={e.img} style={{width:"100px",height:"100px"}}></img>
                   <h4 style={{lineHeight:"100px"}}>PRICE: RS /{e.cost}</h4>
                   <h3 style={{color:"navy",lineHeight:"100px"}}>DESCRIPTION: {e.info}</h3>
                </div>
            ))}
          </div>
          <div style={{width:"20%",height:"100vh"}}>
              <button style={{background:"red",color:"white"}}>CHECKOUT</button>
          </div>
        </div>
    )
}
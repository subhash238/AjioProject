import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Product } from "./Products";
// import {axios} from "axios"
export const Sale=()=>{
   const [data,setData]=useState([])

   useEffect(()=>{
      fetch("http://localhost:3001/items")
     .then((res)=>res.json())
     .then((res)=>setData(res))
   },[])
   console.log("data",data)
    return(
        <div>
            <div style={{width:"20%",height:"100vh",marginTop:"70px",float:"left"}}>
                <h6 style={{textAlign:"center",color:"#AFACAC"}}>Home / D2C Fashion</h6>
                <h3 style={{textAlign:"center"}}>Refine By</h3>
                <p style={{lineHeight:"1px",textAlign:"center"}}>-Gender</p>
                <input style={{marginLeft:"100px"}} type="checkbox"/>Men
                <br/>
                <input style={{marginLeft:"100px"}} type="checkbox"/>Women
                <hr/>
                <p style={{textAlign:"center"}}>-Category</p>
                <input style={{marginLeft:"100px"}} type="checkbox"/>Tshirt
                <br/>
                <input style={{marginLeft:"100px"}} type="checkbox"/>Casual Shoes
                <input style={{marginLeft:"100px"}} type="checkbox"/>Sneakers & Sports
                <br/>
                <input style={{marginLeft:"100px"}} type="checkbox"/>Formal Shoes
                <input style={{marginLeft:"100px"}} type="checkbox"/>kurtas & Shirts
                <p style={{textAlign:"center"}}>More</p>
            </div>
            <div style={{width:"79%",height:"25vh",marginTop:"70px",float:"left"}}>
                <h1 style={{textAlign:"center"}}>Min 80 Percent Off</h1>
                <hr/>
                <div style={{float:"right"}}>
                    SORT BY<select name="Relevance">
                        <option>Relevance</option>
                        <option>Price(Low To High)</option>
                        <option>Price(High to Low)</option>
                    </select>
                </div>
            </div>
            <div style={{position:"relative",width:"79%",height:"100vh",float:"left",display:"grid",gridTemplateColumns:"30% 30% 30%",gridGap:"4%"}}>
        {data.map((e)=>(
            <Link to={`/men/fashion/moredetail/${e.id}`} style={{textDecoration:"none",color:"teal"}}>
            <div style={{width:"300px",height:"500px"}}>
               <img style={{width:"300px",height:"300px"}} src={e.img}/>
               <p style={{textAlign:"center"}}>{e.view}</p>
               <p style={{textAlign:"center"}}>{e.Bond}</p>
               <p style={{textAlign:"center"}}>{e.info}</p>
               <p style={{textAlign:"center"}}>{e.cost}</p>
               <p style={{textAlign:"center"}}>Offer Price: {e.offer}</p>
            </div>
            </Link>
        ))}
        </div>
        </div>
    )
}
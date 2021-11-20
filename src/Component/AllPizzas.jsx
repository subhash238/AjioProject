import React, { useEffect, useState } from "react";
import Styles from "./Styles/AllPizza.module.css"
export const Allpizzas=()=>{
  const[data,setData]=useState([])
//   const[cart,setCart]=useState([])
  useEffect(()=>{
        fetch("http://localhost:8000/items")
        .then(res=>res.json())
        .then(res=>setData(res))
  },[])
  console.log(data)
  const handleToAdd=(cartdata)=>{
    let arr=JSON.parse(localStorage.getItem("cart"))||[];
    arr.push(cartdata)
    let items=JSON.stringify(arr)
    localStorage.setItem("cart",items)
  }
    return(
        <div>
            <h3>All Pizzas</h3>
            <div className={Styles.Allpizzas}>
             {data.map((e)=>(
                 <div id={e.id} className={Styles.cardiv}>
                        <div className={Styles.imagediv}>
                            <img src={e.img}/>
                        </div>
                        <div className={Styles.textdiv}>
                            <h4>{e.name}</h4>
                            <p>{e.size}</p>
                        </div>
                        <div className={Styles.btndiv}>
                            <div>
                                <h4 className={Styles.h4}>$ 400</h4>
                            </div>
                            <div>
                                <button onClick={(el)=>handleToAdd(e)} className={Styles.button}>+  ADD</button>
                            </div>
                        </div>
                 </div>
             ))}
            </div>
        </div>
    )
}
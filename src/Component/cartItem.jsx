import React, { useState } from "react";
import Styles from "./Styles/cart.module.css"
export const CartItem=()=>{
    let data=JSON.parse(localStorage.getItem("cart"))||[]
    const result = data.reduce( ( sum, { price } ) => sum + price , 0)
    const[cart,setCart]=useState(data)
    const[total,setTotal]=useState(result)
    const handleAdd=(id)=>{
        const newdata=cart.map((element)=> element.id===id?{...element,count:element.count+1}:element)
        setCart(newdata)
        const updated=newdata.reduce( ( sum, { price,count } ) => sum + count*price ,0 )
        setTotal(updated)
        console.log(total)
    }
    const handleMin=(id)=>{
        const newdata=cart.map((element)=> element.id===id?{...element,count:element.count-1}:element)
        setCart(newdata)
        const updated=newdata.reduce( ( sum, { price,count} ) => sum +count*price , 0)
        setTotal(updated)
    }

    return(
        <div>
            <div className={Styles.cartsummary}>
                {/* <div className={Styles.carticon}>
                    <img src="https://image.flaticon.com/icons/png/512/126/126083.png"/>
                </div>
                <div className={Styles.cartext}>
                    <h4>Order Summary</h4> */}
                {/* </div> */}
            </div>
            {cart.map((e)=>(
                <div className={Styles.cart}>
                    <div>
                        <img src={e.img}/>
                    </div>
                    <h5>{e.name}</h5>
                    <div>
                        <button onClick={()=>handleMin(e.id)} className={Styles.add}>-</button>
                        <h3>{e.count}</h3>
                        <button onClick={()=>handleAdd(e.id)} className={Styles.dec}>+</button>
                    </div>
                    <div>
                        <h4>${e.price*e.count}</h4>
                    </div>
                </div>
            ))}
            <div className={Styles.order}>
                <h3>Total Amount ------- <span style={{color:"red"}}>${total}</span> </h3>
                <input type="text" placeholder="Adress" style={{width:"70%",height:"4vh"}}></input>
                <button style={{marginLeft:"70%",backgroundColor:"green",color:"white"}}>Order Now</button>
            </div>
        </div>
    )
}
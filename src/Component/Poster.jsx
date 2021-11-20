import React from "react";
import Styles from "./Styles/poster.module.css"
export const Poster=()=>{

    return(
        <div className={Styles.header}>
            <div className={Styles.order}>
                <div>
                    <p style={{fontWeight:"bold"}}>Are you Hungry?</p>
                    <h1>Don't Wait !</h1>
                    <button className={Styles.button}>Order Now</button>
                </div>
            </div>
            <div className={Styles.poster}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2Kv04vuAOoSptiWheTsC9nzhwXRrWAsQ6hyv2P6iBeTknDjyl8onM3DUHkrfiCMWIo8&usqp=CAU"/>
            </div>
        </div>
    )
}
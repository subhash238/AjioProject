import React from "react";
import { Link } from "react-router-dom";
const cards=["https://assets.ajio.com/medias/sys_master/images/images/hc4/h37/34822479314974/19082021-D-MHP-discountstore-min80.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/ha3/ha7/34822479380510/19082021-D-MHP-discountstore-under599.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/hbd/h88/34822479446046/19082021-D-MHP-discountstore-extra25.jpg"]
export const CardAgain=()=>{
  
    return(
        <div style={{display:"flex",width:"100%",height:"75vh"}}>
            {cards.map((e)=>(
                <div style={{width:"33%"}}>
                    <Link to="/fashion">
                    <img src={e}></img>
                    </Link>
                </div>
            ))}
        </div>
    )
}
import React from "react";
const cards=["https://assets.ajio.com/medias/sys_master/images/images/hc9/h44/35110665977886/02092021-d-unisex-experienceajio-openingtile.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/hea/hbc/35110666043422/02092021-d-unisex-experienceajio-signup.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/he6/h43/44239686303774/14092021-d-unisex-experienceajio-firstpurchase-extra15-extra25-extra5.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/h13/h72/35110666305566/02092021-d-unisex-experienceajio-referral.jpg"]
export const Card=()=>{
  
    return(
        <div style={{display:"flex",width:"100%",height:"75vh"}}>
            {cards.map((e)=>(
                <div style={{width:"25%"}}>
                    <img src={e}></img>
                </div>
            ))}
        </div>
    )
}
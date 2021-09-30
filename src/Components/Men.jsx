import React from "react";
import Slideshow from './SlideShow';
import {Image} from "./Image"
import {Delivery} from "./Delivery"
import{Card} from "./Card"
import SlideShowAgain from "./slideShowAgain"
import SlideshowMore from "./SlideshowMore"
import { CardAgain } from "./CardAgain";
export const Men=()=>{

    return(
        <div>
            <img style={{marginTop:"0px"}} src="https://assets.ajio.com/medias/sys_master/images/images/h26/h50/44488661794846/30092021-D-MHP-topstrip-1-poweredbylevis.jpg"/>
            <Image image="https://assets.ajio.com/medias/sys_master/images/images/h55/h9c/44488662974494/30092021-D-MHP-topbanner-5090.jpg"/>
            <Image image="https://assets.ajio.com/medias/sys_master/images/images/h03/ha3/44488666054686/30092021-D-MHP-HeroProductBanner.jpg"/>
            <img src="https://assets.ajio.com/medias/sys_master/images/images/h31/he3/44488664875038/30092021-D-MHP-stripheader-onlyatajio.jpg"/>
            <SlideshowMore/>
            <img src="https://assets.ajio.com/medias/sys_master/images/images/h56/h07/44488665071646/30092021-D-MHP-stripheader-ohsobigoffers.jpg"></img>
        
            <CardAgain/>
            {/* <SlideShowAgain/> */}
        </div>
    )
    
}
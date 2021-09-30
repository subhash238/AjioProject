import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
export const Navbar=()=>{

    return(
        <div style={{position:"fixed",zIndex:"999",top:"0",background:"#FFFFFF",boxShadow:"0px 2px #d4d8db",width:"100%",height:"100px",borderTop:"3px solid #2C4152",display:"flex",justifyContent:"space-between"}}>
          <div style={{width:"130px",height:"60px",border:"",marginLeft:"60px",marginTop:"10px"}}>
              <img style={{width:"100%",height:"60px"}} src="https://assets.ajio.com/static/img/Ajio-Logo.svg"></img>
          </div>
          <div style={{border:"5px 10px #888888",width:"40%",height:"30px",marginTop:"55px",display:"flex",justifyContent:"space-evenly",marginLeft:"200px"}}>
          <Link className="navbar"to="/men">MEN</Link>
          <Link className="navbar">WOMEN</Link>
          <Link className="navbar">KIDS</Link>
          <Link className="navbar">INDIE</Link>
          <Link className="navbar">HOME AND KITCHEN</Link>
          </div>
          <div style={{border:"",width:"35%"}}>
                <div style={{display:"flex",justifyContent:"space-evenly",width:"70%",height:"5vh",border:"",float:"right",marinBottom:"1px"}}>
                    <Link className="loginsection">Sign In / Join AJIO</Link>
                    <Link className="loginsection">Customer Care</Link>
                </div>
                <div style={{width:"100%",height:"10vh",border:"[",clear:"both",display:"flex"}}>
                    <div style={{background:"#FFFDED",width:"60%",height:"35px",border:"1px solid #2C4152",marginTop:"5px",borderRadius:"20px",display:"flex"}}>
                    <input  style={{background:"#FFFDED",width:"80%",height:"30px",borderRadius:"20px",border:"none",outline:"none",marginLeft:"10px"}} type="text" placeholder="Search AJIO"></input>
                    <div style={{width:"20px",height:"20px",marginTop:"5px",border:""}}>
                    <img  style={{width:"20px",height:"20px"}} src="https://static.thenounproject.com/png/3134345-200.png"></img>
                    </div>
                    </div>
                    <div style={{width:"35px",height:"35px",marginTop:"5px",border:"",marginLeft:"10px",borderRadius:"17.5px"}}>
                        <img  style={{width:"35px",height:"35px",borderRadius:"17.5px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ICB1om1I7Qsfartea9brMn4AUE3dgnrzCjS-W6Jt5oiyNbxN_o15ZPSCVNaCzXD_9-w&usqp=CAU"></img>
                    </div> 
                    <div style={{width:"35px",height:"35px",marginTop:"5px",border:"",marginLeft:"10px",borderRadius:"17.5px"}}>
                    <Link to="/cart">    
                    <img  style={{width:"35px",height:"35px",borderRadius:"17.5px"}} src="https://thumbs.dreamstime.com/b/shopping-bag-icon-black-background-black-flat-style-vector-illustration-shopping-bag-icon-black-background-black-flat-style-170442753.jpg"></img>
                    </Link>
                    </div>
                </div>
          </div>
        </div>
    )
}
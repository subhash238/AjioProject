import React from "react"
import styles from "./Styles/Navbar.module.css"
import { Link } from "react-router-dom";
export const NavBar=()=>{

    return(
        <div className={styles.navbar}>
               <div className={styles.logosection}>
                   <div className={styles.imagesection}>
                       <img src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"/>
                   </div>
                   <h4>Pizza</h4>
               </div>
               <div className={styles.linkSection}>
                   <div>
                       <h4>Menu</h4>
                   </div>
                   <div>
                       <h4>Offers</h4>
                   </div>
                   <div>
                        <h4>My Orders</h4>
                   </div>
                   <div>
                        <h4>Login</h4>
                   </div>
                   <div>
                   <Link to="/cart">
                       <div className={styles.cart}>
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlg3WlkyriIXhPWqa0ZPdCgI1Ogev0ltm9UOH0EiNcdiIGn2aQpQ4JHSVSMikCN6M-pY&usqp=CAU"/>
                       </div>
                    </Link>
                   </div>
                   <h4>12</h4>
               </div>
        </div>
    )
}
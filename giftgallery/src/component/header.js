import { Component } from "react";

import "./style.css";

class Header extends Component{
   render(){
    return(
        <div>
         <div className="header">
            <ul>
                <li>Categories</li>
                <li>Pages</li>
                <li>Anniversary</li>
                <li>Birthday</li>
                <li>Personal</li>
                <li>Reception</li>
               <li>Occasions</li>
               <li>Surprise</li>

                    
            </ul>

            </div>

            <div className="main-content">
              <img src="s2.jpg"/>
            </div>
        </div>
    ) 
   }
} 
export default Header;


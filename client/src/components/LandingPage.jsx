import React from "react";
import { Link } from "react-router-dom";

import "../style/LandingPage.css";
const Landing = () =>{
    
    return (

       
        <div className="container">
          
            <Link to ="/countries"><button className="btn">We started?</button></Link>
       </div>

      

    )
}

export default Landing;
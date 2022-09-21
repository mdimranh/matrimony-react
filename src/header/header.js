import React from "react";
import logo from "../img/logo.png";
import "./header.css";

function Topnav(){
    return(
        <nav className="topNav">
            <img className="logo" src={logo} alt="" />
            <ul>
                <li>সকল</li>
                <li>পাত্র</li>
                <li>পাত্রী</li>
            </ul>
        </nav>
    )
}

export default Topnav

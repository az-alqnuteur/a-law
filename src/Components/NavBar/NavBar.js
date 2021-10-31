import React from "react";
import "./NavBar.css"
import logo from "./../../Gallery/logo.png"

import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <>
            <div className="NavBar">
                <div className="Logo" >
                    <Link to="/" ><img src={logo} /></Link>
                </div>

                <div className="Menu">
                    <li className="Home" >
                        <Link to="/" >الرئيسية</Link>
                    </li>

                    <li className="About_Us" >
                        <Link to="AboutUs" >عن المكتب</Link>
                    </li>

                    <li className="Our_Services" >
                        <Link to="OurServices" >خدماتنا</Link>
                    </li>

                    <li className="Contact" >
                        <Link to="Contact">اتصل بنا</Link>
                    </li>
                </div>
            </div>
        </>

    );
}


export default NavBar;

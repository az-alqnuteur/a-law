import React from "react";
import "./../../css/Footer.css"


import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className="Footer padding">
                <div className="copyright" >
                جميع الحقوق محفوظة لدي موقع عبد الرحمن سليمان القنيطير © 2021
                </div>

                <div className="Media">
                    {/* <img src={Twiter} ></img>
                    <img src={Linkedin} ></img> */}
                </div>

                <div className="footer-menu">
                    <li className="Home-footer" >
                        <Link to="/" >الرئيسية</Link>
                    </li>

                    <li className="About_Us-footer" >
                        <Link to="About_Us" >عن المكتب</Link>
                    </li>

                    <li className="Our_Services-footer" >
                        <Link to="Our_Services" >خدماتنا</Link>
                    </li>

                    <li className="Contact-footer" >
                        <Link to="Contact">اتصل بنا</Link>
                    </li>
                </div>
            </div>
        </>

    );
}


export default Footer;
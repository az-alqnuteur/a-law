import react, { useState } from "react";
import './../css/Contact.css'
import cnot from './../Gallery/cnot.png'
import cnot1 from './../Gallery/cont1.png'
import cnot2 from './../Gallery/cont2.png'
import cnot3 from './../Gallery/cont3.png'
import cnot4 from './../Gallery/cont4.png'





function Contact() {
    return (
        <>
            <div className="hero-us" style={{ background: `url(${cnot})` }}>
                <div className="wlcme-text-us">اتصل بنا</div>
            </div>

            <div className="AboutUS-main">
                <div className="AboutUs-text">
                    <div className="titel">معلومات التواصل</div>
                    <div className="divdier" />
                    <div className="main-text">
                    مكتب المحامي عبد الرحمن سليمان القنيطير للمحاماة والإستشارات القانونية
                    </div>
                    <div className="msg alint-c ">
                        <img src={cnot1} className="cont-img" />
                        <div className="cont-main">
                            <div className="main-text">الرياض - حي المرسلات - مخرج 9 - بالقرب من كلية الإتصالات وتقنية المعلومات</div>
                        </div>
                    </div>
                    <div className="msg alint-c">
                        <img src={cnot2} className="cont-img" />
                        <div className="cont-main">
                            <div className="main-text"><a href="tel:٩٢٠٠٣٥١٥١"> ٩٢٠٠٣٥١٥١ </a></div>
                        </div>
                    </div>
                    <div className="msg alint-c">
                        <img src={cnot3} className="cont-img" />
                        <div className="cont-main">
                            <div className="main-text"><a href="mailto:Info@law-2.com">Info@law-2.com</a></div>
                        </div>
                    </div>
                    {/* <div className="msg alint-c">
                        <img src={cnot4} className="cont-img" />
                        <div className="cont-main">
                            <div className="main-text"><a href="">واتس اب</a></div>
                        </div>
                    </div> */}
                </div>
                <div className="AboutUS-main-img">
                    <form>
                        <label>Enter your name:
                            <input type="text" />
                        </label>
                    </form>
                </div>
            </div>

        </>
    );

}


export default Contact;
import react from "react";
import './../css/AboutUs.css'
import os from './../Gallery/os.png'
import os1 from './../Gallery/os1.png'
import os2 from './../Gallery/os2.png'
import os3 from './../Gallery/os3.png'
import os4 from './../Gallery/os4.png'
import os5 from './../Gallery/os5.png'
import os6 from './../Gallery/os6.png'
import os7 from './../Gallery/os7.png'
import os8 from './../Gallery/os8.png'
import './../css/OurServices.css'



function OurServices() {
    return (
        <>
            <div className="hero-us" style={{ background: `url(${os})` }}>
                <div className="wlcme-text-us">خدماتنا</div>
            </div>

            <div className="text-os">
                <div className="titel">ماذا نقدم لك</div>
                <div className="divdier" />
                <div className="main-text">
                نقدم لكم مجموعة من الخدمات في الجانب القانوني على سبيل المثال جميع الخدمات والإستشارات القانونية تأسيس الشركات الإستشارات والحلول الشرعية والقانونية التحرير وتقديم الطعون الموضوعية والفنية كتابة العقود واللوائح وغيرها من المستندات
                </div>
            </div>
            <div className="OS-boxs">
                <div className="box">
                    <img src={os1} className="img-box" />
                    <div className="os-text">تأسيس الشركات</div>
                </div>

                <div className="box">
                    <img src={os2} className="img-box" />
                    <div className="os-text">الإستشارات والحلول الشرعية والقانونية</div>
                </div>

                <div className="box">
                    <img src={os3} className="img-box" />
                    <div className="os-text">التحرير وتقديم الطعون للمستندات القانونية</div>
                </div>

                <div className="box">
                    <img src={os4} className="img-box" />
                    <div className="os-text">كتابة العقود واللوائح وغيرها من المستندات</div>
                </div>

                <div className="box">
                    <img src={os5} className="img-box" />
                    <div className="os-text">الريادة والتميز والمساهمة في تعزيز الثقافة القانونية الحديثة</div>
                </div>

                <div className="box">
                    <img src={os6} className="img-box" />
                    <div className="os-text">تكوين تجربة ناجحة لعملائنا وتقديمخدمات قانونية</div>
                </div>

                <div className="box">
                    <img src={os7} className="img-box" />
                    <div className="os-text">التميز في جميع خدمات المكتب</div>
                </div>

                <div className="box">
                    <img src={os8} className="img-box" />
                    <div className="os-text">التميز في جميع خدمات المكتب</div>
                </div>
            </div>

        </>
    );

}


export default OurServices;
import react from "react";
import './../css/AboutUs.css'
import us1 from './../Gallery/us.png'
import us2 from './../Gallery/us2.png'




function AboutUs() {
    return (
        <>
            <div className="hero-us" style={{ background: `url(${us1})` }}>
                <div className="wlcme-text-us">عن المكتب</div>
            </div>

            <div className="AboutUS-us">
                <div className="AboutUs-text">
                    <div className="titel">من نحن</div>
                    <div className="divdier" />
                    <div className="main-text">
                        ‎مكتب المحامي عبدالرحمن القنيطير للمحاماة والاستشارات القانونية ‎يقدم لكم مجموعة من الخدمات في الجانب القانوني على سبيل المثال جميع الخدمات والإستشارات القانونية تأسيس الشركات الإستشارات
                        والحلول الشرعية والقانونية التحرير وتقديم الطعون الموضوعية والفنية كتابة العقود واللوائح وغيرها من المستندات‎ مكتب المحامي عبدالرحمن القنيطير للمحاماة والاستشارات القانونية‎يقدم لكم مجموعة من الخدمات في الجانب القانوني على سبيل المثال جميع الخدمات والإستشارات القانونية تأسيس الشركات الإستشارات والحلول الشرعية والقانونية التحرير وتقديم الطعون الموضوعية
                        والفنية كتابة العقود واللوائح وغيرها من المستندات‎مكتب المحامي عبدالرحمن القنيطير للمحاماة والاستشارات القانونية ‎يقدم لكم مجموعة من الخدمات في الجانب القانوني على سبيل المثال جميع الخدمات والإستشارات القانونية تأسيس الشركات الإستشارات والحلول الشرعية والقانونية التحرير وتقديم الطعون الموضوعية والفنية كتابة العقود واللوائح وغيرها من المستندات‎ مكتب المحامي عبدالرحمن القنيطير
                        للمحاماة والاستشارات القانونية ‎يقدم لكم مجموعة من الخدمات في الجانب القانوني على سبيل المثال جميع الخدمات والإستشارات القانونية تأسيس الشركات الإستشارات والحلول الشرعية والقانونية التحرير وتقديم الطعون الموضوعية والفنية كتابة العقود واللوائح وغيرها من المستندات
                    </div>
                </div>
                <div className="AboutUS-main-img">
                    <img src={us2} className="us-img1" />
                </div>
            </div>

        </>
    );

}


export default AboutUs;
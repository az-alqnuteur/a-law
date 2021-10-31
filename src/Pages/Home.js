import react from "react";
import { Link } from "react-router-dom";
import './../css/Home.css'
import hero from './../Gallery/hero.png'
import secimg from './../Gallery/sec-img.png'
import eye from './../Gallery/Icon metro-eye.png'
import msg from './../Gallery/Icon feather-message-square.png'
import img1 from './../Gallery/Mask Group 18.png'
import img2 from './../Gallery/Mask Group 17.png'



function Home() {
    return (
        <>
            <div className="hero-main" style={{ background: `url(${hero})` }}>
                <div className="wlcme-text">مكتب عبدالرحمن بن سليمان القنيطير للمحاماة والاستشارات القانونية يرحب بكم</div>
                <div className="btn"><Link to="AboutUs">قراءة المزيد</Link></div>
                <img className="sec-img" src={secimg} style={{ alignSelf: 'center' }} />
            </div>

            <div className="AboutUS-main">
                <div className="AboutUs-text">
                    <div className="titel">نبذه عنا</div>
                    <div className="divdier" />
                    <div className="main-text">
                        مكتب عبدالرحمن بن سليمان القنيطير للمحاماة والاستشارات القانونية هو مكتب مهني متخصص في تقديم الاستشارات القانونية مرخص له من وزراة العدل برقم ٣٩/١٣١ ومقره مدينة الرياض ، ويعمل بالمكتب مجموعة من المتخصصين في معظم المجالات القانونية والشرعية ، ويسعى مكتب عبدالرحمن بن سليمان القنيطير للمحاماة والاستشارات القانونية إلى تقديم افضل الخدمات وبمهنية عالية لجميع عملائه وتحقيق التقدم والتطور في شتى المجلات وابتكار الحلول القانوية وفق الانظمة المرعية في المملكة العربية السعودية بما يتواكب مع رؤية المملكة العربية السعودية ٢٠٣٠ ، ويؤمن بأن جميع عملائه يجب ان يتمتعوا بالخدمة المتميزة والمرضية في جميع الاوقات.
                    </div>
                    <div className="vig">
                        <img src={eye} className="icon eye-icon" />
                        <div className="eye">
                            <div className="eye-title">رؤيتنا</div>
                            <div className="eye-text">الريادة والتميز والمساهمة في تعزيز الثقافة القانونية الحديثة وتكوين قيمة مضافة في المجال القانوني بالمملكة العربية السعودية</div>
                        </div>
                    </div>
                    <div className="msg">
                        <img src={msg} className="icon msg-icon" />
                        <div className="msg-main">
                            <div className="msg-title">رسالتنا</div>
                            <div className="msg-text">تكوين تجربة ناجحة لعملائنا وتقديم خدمات قانونية بطابع مهني واحترافي، مع مراعاة الجودة والكفاءة العالية</div>
                        </div>
                    </div>
                </div>
                <div className="AboutUS-main-img">
                    <img src={img1} className="main-img1" />
                    <img src={img2} className="main-img2" />
                </div>
            </div>
        </>
    );

}


export default Home;
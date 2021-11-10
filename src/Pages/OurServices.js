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
                    <div className="os-text"> تأسيس الشركات</div>
                    <div className="os-text-s"> مراجعة عقود الشركات.</div>
                    <div className="os-text-s">الاستشارات القانونية الخاصة بالشركات .</div>
                    <div className="os-text-s"> تصفية وإفلاس الشركات وفق نظام الافلاس</div>
                    <div className="os-text-s"> تقديم المشورة القانونية لأعضاء مجلس إدارة الشركات.</div>
                </div>


                <div className="box">
                    <img src={os2} className="img-box" />
                    <div className="os-text">التقاضي</div>
                    <div className="os-text-s">التمثيل القانوني أمام المحاكم والجهات القضائية، وشبه القضائية وهيئات التحكيم.
                    </div>
                </div>

                <div className="box">
                    <img src={os3} className="img-box" />
                    <div className="os-text">التركات والوصايا</div>
                    <div className="os-text-s">كل مايخصها من صياغة ومتابعة وقسمة شرعية وفق الأنظمة المرعية.</div>
                </div>

                <div className="box">
                    <img src={os4} className="img-box" />
                    <div className="os-text">البناء والمقاولة</div>
                    <div className="os-text-s">عقود البناء والتشغيل ونقل الملكية والتعاقد من الباطن.</div>
                    <div className="os-text-s">كتابة المخاطبات بين المتعاقدين وفق الأنظمة بما يكفل ضبط الحقوق .</div>
                </div>

                <div className="box">
                    <img src={os5} className="img-box" />
                    <div className="os-text">محامي العائلة .</div>
                    <div className="os-text-s">وذلك بتقديم الحلول التجارية الوقائية بين الأسرة الواحدة ، وكذلك تعاملتها مع الغير بما يضمن ضبط العلاقة بين الأطراف .[</div>
                </div>

                <div className="box">
                    <img src={os6} className="img-box" />
                    <div className="os-text">أنظمة العمل و العمال</div>
                </div>

                <div className="box">
                    <img src={os7} className="img-box" />
                    <div className="os-text">أنظمة العمل</div>
                    <div className="os-text-s">مراجعة عقود العمل لتتوافق مع أنظمة العمل في المملكة والحوافز ومكافآت نهاية الخدمة.</div>
                    <div className="os-text-s">تسوية الخلافات العمالية</div>
                    <div className="os-text-s">صياغة ومراجعة الأنظمة واللوائح الداخلية للمنشأة.</div>
                    <div className="os-text-s">جراءات تسريح الموظفين والعمال.</div>
                </div>

                <div className="box">
                    <img src={os8} className="img-box" />
                    <div className="os-text">التحكيم</div>
                    <div className="os-text-s">صياغة وثيقة التحكيم والقيام بدور المحكم</div>
                </div>
            </div>


        </>
    );

}


export default OurServices;
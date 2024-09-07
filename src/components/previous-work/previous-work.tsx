import React from "react";
import "../previous-work/previous-styles.css";



const PreviousWork = () => {
    return (
        <div className="previous-work">
            <h1 className="our-numbers">
                سابقة الأعمال
            </h1>
            <p className="discounts">
                خصم خاص لكافة الخدمات بمناسبة مرور 25 عاما من الخبرة
            </p>
            <div className="num-cats">
                <div className="sub-cat">
                    <span className="icon">

                    </span>
                    <div className="num-val">
                        30

                    </div>
                    <div className="num-comment">
                        الذين يعملون من أجلك !
                    </div>
                </div>
                <div className="sub-cat">
                    <span className="icon">

                    </span>
                    <div className="num-val">
                        5000+
                    </div>
                    <div className="num-comment">
                        أعمال سابقة
                    </div>
                </div>
                <div className="sub-cat">
                    <span className="icon">

                    </span>
                    <div className="num-val">
                        25%
                    </div>
                    <div className="num-comment">
                        خصم خاص لكافة خدمات التنظيف
                    </div>
                </div>

            </div>


            <div className="mantra">
              <h1 className="bio">لا تشيل هم .. خلينا نهتم
              </h1>
              <p className="man1">الوصول لاعلي درجات النظافة مع التخلص التام من كافة الميكروبات والجراسيم</p>
              <button className="call-us">اتصل بنا</button>
            </div>
        </div>
    )
}

export default PreviousWork;
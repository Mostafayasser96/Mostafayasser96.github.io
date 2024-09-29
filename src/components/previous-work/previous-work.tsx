import React from "react";
import "../previous-work/previous-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faPerson, faFaceSmile } from "@fortawesome/free-solid-svg-icons";


const PreviousWork = () => {
    return (
        <div className="previous-work">
            <h1 className="previous-header">
               ! الأرقام تتكلم 
            </h1>
            <div className="line"></div>
            <h3 className="previous-description col-lg-12 col-sm-12">
                خصم خاص لكافة الخدمات بمناسبة مرور 25 عاما من الخبرة
            </h3>
            <div className="previous-details d-lg-flex d-sm-block justify-content-between">    
                <div className="achievement">
                    <i className="icon">
                    <FontAwesomeIcon icon={faGift} color="red" />
                    </i>
                    <p className="number1">
                         25%
                    </p>
                    <p className="achievement-description1">
                    خصم خاص لكافة خدمات التنظيف
                    </p>
                </div>
                <div className="achievement">
                    <i className="icon">
                    <FontAwesomeIcon icon={faFaceSmile} color="#f69023" />
                    </i>
                    <p className="number">
                         200+
                    </p>
                    <p className="achievement-description">
                    أعمال سابقة
                    </p>
                </div>
                <div className="achievement">
                    <i className="icon">
                    <FontAwesomeIcon icon={faPerson} color="#f69023" />
                    </i>
                    <p className="number">
                       15+
                    </p>
                    <p className="achievement-description">
                   ! الذين يعملون من أجلك 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PreviousWork;
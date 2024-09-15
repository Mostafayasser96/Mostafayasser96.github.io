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
            <h3 className="previous-description">
                خصم خاص لكافة الخدمات بمناسبة مرور 25 عاما من الخبرة
            </h3>
            <div className="previous-details d-flex justify-content-space-between">
                
                
                <div className="achievement">
                    <i className="icon">
                    <FontAwesomeIcon icon={faGift} color="red" />
                    </i>
                    <p className="number">
                         25%
                    </p>
                    <p className="achievement-description">
                       {/* There should be a discount here */}
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
                          {/* There should be a heading here */}
                    </p>
                </div>
                <div className="achievement">
                    <i className="icon">
                    <FontAwesomeIcon icon={faPerson} color="#f69023" />
                    </i>
                    <p className="number">
                       30+
                    </p>
                    <p className="achievement-description">
                            {/* There should be a heading here */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PreviousWork;
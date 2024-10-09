import React from "react";
import { useState } from "react";
import { Info, Info2 } from "./services-info";
import "../services/services-styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [message, setMessage] = useState("")

    const phoneNumber = "0534150198";
    interface CallButtonProps {
        phoneNumber: string;
    }
    const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
        const handleCall = () => {
            window.location.href = `tel:${phoneNumber}`;
        };

        return (
            <button className="call-btn d-block px-0 py-0" onClick={handleCall}>
                0534150198
            </button>
        );
    };
    return (
        <div className="services">
            <a className="mobile-number mx-auto mb-3 d-flex justify-content-evenly">
                <FontAwesomeIcon icon={faPhone} color="rgb(246, 144, 35)" className="callUs-icon" />
                <CallButton phoneNumber={phoneNumber} />
            </a>
            <div className="services-bio">
                <h1 className="services-heading ">
                    الخدمات
                </h1>
                <div className="line"></div>
                <p className="bio ">
                    في أتم جاهزية للقيام بكافة أعمال التنظيف  والتعقيم والتطهير علي مدار اليوم ..
                    تنظيف وتعقيم النوافذ والمغاسل والحمامات والجدران والارضيات والابواب
                    ازالة الغراء والاوساخ وتلميع السيراميك
                    كافة خدمات التعقيم والتطهير ومكافحة الحشرات والآفات
                </p>
            </div>
            <div className="services-detailed">
                <div className="cardHolder d-lg-flex d-sm-block justify-content-space-between ">
                    {Info?.map((service, key: number) => (
                        <div className="service-card col-lg-4" key={key}>
                            <img className="card-img" src={service.image as string} alt={service.header} />
                            <h3 className="details-header">
                                {service.header}
                            </h3>
                            <p className="details-description">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="cardHolder d-lg-flex d-sm-block justify-content-space-between ">
                    {Info2?.map((service, key: number) => (
                        <div className="service-card col-lg-4" key={key}>
                            <img className="card-img" src={service.image as string} alt={service.header} />
                            <h3 className="details-header">
                                {service.header}
                            </h3>
                            <p className="details-description">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services;
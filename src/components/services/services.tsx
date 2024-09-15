import React from "react";
import { Info, Info2 } from "./services-info";
import "../services/services-styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const Services = () => {
    return (
        <div className="services">
            <div className="services-bio">
                <h1 className="services-heading">
                    الخدمات
                </h1>
                <div className="line"></div>
                <p className="bio">
                    في أتم جاهزية للقيام بكافة أعمال التنظيف  والتعقيم والتطهير علي مدار اليوم ..
                    تنظيف وتعقيم النوافذ والمغاسل والحمامات والجدران والارضيات والابواب
                    ازالة الغراء والاوساخ وتلميع السيراميك
                    كافة خدمات التعقيم والتطهير ومكافحة الحشرات والآفات
                </p>
            </div>
            <div className="services-detailed">
                <div className="cardHolder d-flex justify-content-space-between">
                    {Info?.map((service, key: number) => (
                        <div className="service-card" key={key}>
                            <img className="card-img" src={service.image as string} alt={service.header} />
                            <h3 className="details-header">
                                {service.header}
                            </h3>
                            <p className="details-description">
                                {service.description}
                            </p>
                            <button className="details-knowMore">
                                {service.knowMore}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cardHolder d-flex justify-content-space-between text-center">
                    {Info2?.map((service, key: number) => (
                        <div className="service-card" key={key}>
                            <img className="card-img" src={service.image as string} alt={service.header} />
                            <h3 className="details-header">
                                {service.header}
                            </h3>
                            <p className="details-description">
                                {service.description}
                            </p>
                            <button className="details-knowMore">
                                {service.knowMore}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services;
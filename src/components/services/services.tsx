import React from "react";
import Info from "./services-info";

const Services = () => {
    return (
        <div className="services"> 
            <div className="services-bio">
                <h1 className="services-heading">
                    {/* The word services should be here */}
                </h1>
                <p className="bio">
                    {/* there should be a text here explaining services */}
                </p>
            </div>
            <div className="services-detailed">
                {Info.map((service, key: number) => (
                    <div key={key}>
                     <img src={service.image as string} alt={service.header} />
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
    )
}
export default Services;
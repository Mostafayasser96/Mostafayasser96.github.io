import React from "react";
import "../clients/clients-styles.css";
import Carousel from 'react-bootstrap/Carousel';
import { ClientsInfo } from "./clients-info";
import "../clients/clients-styles.css";


const Clients = () => {
    return (
        <div className="clients">
            <h1 className="clients-heading">عملاؤنا</h1>
            <div className="line"></div>
            <p className="clients-bio">فخورون لتقديم خدمة ممتازة وعلاقات قيّمة طويلة الأمد مع عملائنا</p>
            <Carousel interval={null} className="clients-carousel">
                {ClientsInfo.map((client, id) => (
                    <Carousel.Item key={id}>
                        <img src={client.src} alt={client.alt} width={client.width} height={client.height}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
export default Clients; 
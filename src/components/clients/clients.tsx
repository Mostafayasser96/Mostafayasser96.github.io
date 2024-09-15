import React from "react";
import "../clients/clients-styles.css";
import Carousel from 'react-bootstrap/Carousel';
import { ClientsInfo } from "./clients-info";


const Clients = () => {
    return (
        <div className="clients">
            <h1 className="clients-heading">عملاؤنا</h1>
            <p className="bio">فخورون لتقديم خدمة ممتازة وعلاقات قيّمة طويلة الأمد مع عملائنا</p>


            <Carousel>
                {ClientsInfo.map((client, key) => (
                    <Carousel.Item interval={client.interval}>
                        <img src={client.src} alt={client.alt} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}

            </Carousel>



        </div>
    )
}
export default Clients; 
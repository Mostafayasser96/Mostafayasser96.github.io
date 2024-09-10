import React from "react";
import { useState } from "react";
import "../comments/comments-styles.css";
import { Carousel } from "react-bootstrap";


const Comments = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="comments">
            <h1 className="comments-heading">آخر التعليقات</h1>
            <h3 className="clients-comments">تعليقات العملاء ...</h3>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    {/* The carousel Image should be here */}
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* The carousel image should be here */}
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* The carousel image should be here */}
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
export default Comments;
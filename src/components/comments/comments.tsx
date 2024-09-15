import React from "react";
import { useState } from "react";
import "../comments/comments-styles.css";
import { Carousel } from "react-bootstrap";
import { Info } from "./comments-info";

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
                {Info.map((comment, key) => (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3 className="rating"> {comment.rating} </h3>
                            <p className="comment"> {comment.comment} </p>
                            <p className="name"> {comment.name} </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
export default Comments;
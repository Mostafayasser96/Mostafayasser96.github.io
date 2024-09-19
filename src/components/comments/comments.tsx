import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../comments/comments-styles.css";
import Carousel from 'react-bootstrap/Carousel';
import CommentsInfo from "../comments/comments-info";
import "../comments/comments-styles.css";

const Comments = () => {
    return (
        <div className="comments">
            <div className="comments-heading">
                آخر التعليقات
            </div>
            <div className="line"></div>
            <div className="sub-heading">
               تعليقات العملاء...
            </div>
            <div className="comments-carousel">
                <Carousel>
                    {CommentsInfo.map((comment, key) => (
                        <Carousel.Item key={key}>
                          <div className="comment">{comment.comment}</div>
                          <div className="name">{comment.name}</div>
                          <div className="rating"> {comment.rating} </div>
                        </Carousel.Item>                      
                    ))}
                </Carousel>
            </div>

        </div>
    )
}
export default Comments;       
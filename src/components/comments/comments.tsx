import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../comments/comments-styles.css";
import { faQuoteLeft, faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import CommentsInfo from "../comments/comments-info";
import "../comments/comments-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <Carousel className="comments-car">
                    {CommentsInfo.map((comment, key) => (
                        <Carousel.Item key={key}>
                            <div id="comment">
                                <FontAwesomeIcon icon={faQuoteRight} />
                                {comment.comment}
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            <div className="comment-line"></div>
                            <div id="name">{comment.name}</div>
                            <div id="rating">
                             <FontAwesomeIcon icon={faStar} color="#FFBF00" />
                             <FontAwesomeIcon icon={faStar} color="#FFBF00"  />
                             <FontAwesomeIcon icon={faStar} color="#FFBF00"  />
                             <FontAwesomeIcon icon={faStar} color="#FFBF00"  />
                             <FontAwesomeIcon icon={faStar} color="#FFBF00"  />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

        </div>
    )
}
export default Comments;       
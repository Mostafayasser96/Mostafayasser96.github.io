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
                <Carousel interval={null} indicators={false} className="row comments-car">
                    {CommentsInfo.map((comment, key) => (
                        <Carousel.Item key={key} className="float-md-none float-lg-none col-md-12 p-y-md-10 p-x-md-20">
                            <div id="comment" className="float-lg-none col-lg-12 float-sm-none text-align-center px-5">
                                <FontAwesomeIcon icon={faQuoteRight} />
                                {comment.comment}
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            <div className="comment-line text-align-center px-5"></div>
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
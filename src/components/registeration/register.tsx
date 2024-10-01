import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from "react-bootstrap";
import { Info } from "./register-info";
import "../registeration/register-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {sendEmail} from "./smtp"


const Register = () => {
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [message, setMessage] = useState("")

  

    return (
        <div className="register-form float-md-none float-lg-none col-md-12 p-y-md-10">
            <h1 className="call-us">اتصل بنا</h1>
            <div className="callUs-line"></div>
            <p className="covering">خدمة 24 ساعة </p>
            <p className="covering2 text-nowrap">نغطى كافة أنحاء المملكة</p>
            <a className="mobile-number">
                <FontAwesomeIcon icon={faPhone} color="rgb(246, 144, 35)" />
                  0534150198
            </a>
            <p className="covering3">اتصل بنا .. او اترك رسالتك ودعنا نتصل بك</p>
            <Form className="form mx-auto">
                
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label> "*سجل رقمك للاتصال بك" </Form.Label>
                    <Form.Control type="text"  onChange={e=>setPhone(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label> "*اختر الخدمة المطلوبة" </Form.Label>
                    <Form.Control type="text"  onChange={e=>setService(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label> "اترك رسالتك" </Form.Label>
                    <Form.Control type="text"  onChange={e=>setMessage(e.target.value)} />
                </Form.Group>
                
                <Button type="submit" target="_blank" onClick={()=>sendEmail(phone, service, message)}>
                    <div className="border-div display-sm-6">
                       تسجيل

                    </div>
                </Button>
            </Form>
        </div>
    )
}
export default Register;
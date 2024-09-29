import React from "react";
import { Button, Form } from "react-bootstrap";
import { Info } from "./register-info";
import "../registeration/register-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Register = () => {
    
return (
    <div className="register-form">
        <h1 className="call-us">اتصل بنا</h1>
        <div className="callUs-line"></div>
        <p className="covering">خدمة 24 ساعة </p>
        <p className="covering2">نغطى كافة أنحاء المملكة</p>
        <a className="mobile-number">
            <FontAwesomeIcon icon={faPhone} color="rgb(246, 144, 35)" />
            00100100100
        </a>
        <p className="covering3">اتصل بنا .. او اترك رسالتك ودعنا نتصل بك</p>
        <Form className="form" >
            {Info.map((form, key) => (
                <Form.Group className="mb-3" controlId={form.controlId} key={key}>
                    <Form.Label> {form.input} </Form.Label>
                    <Form.Control type={form.type} placeholder={form.placeholder} />
                </Form.Group>
            ))}

            <Button type="submit"  target="_blank">
                <div className="border-div">
                    تسجيل - سيتم الاتصال بك من قبل مندوبنا

                </div>
            </Button>
        </Form>
    </div>
)
}
export default Register;
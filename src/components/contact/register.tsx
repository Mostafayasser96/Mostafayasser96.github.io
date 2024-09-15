import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Info } from "./register-info";

const Register = () => {

    return (
        <div className="register-form">
            <h1 className="call-us">اتصل بنا</h1>
            <p className="covering">خدمة 24 ساعة </p>
            <p className="covering2">نغطى كافة أنحاء المملكة</p>
            <p className="mobile-number">
                {/* The service mobile number should be here */}
            </p>
            <p className="covering3">اتصل بنا .. او اترك رسالتك ودعنا نتصل بك</p>
            <Form>
                {Info.map((form, key) => (
                    <Form.Group className="mb-3" controlId={form.controlId}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type={form.type} placeholder={form.placeholder} />
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Register;
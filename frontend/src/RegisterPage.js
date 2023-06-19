import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registerpage.css";

const RegisterPage = () => {
  return (
    <div className="maincontainers">
      <div className="subcontainers">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="FirstName" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="LastName" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="Date Of Birth" /><br/>

            <Form.Control placeholder="Contact" /><br/>

            <Form.Control placeholder="Email" /><br/>

            <Form.Control placeholder="Password" /><br/>

            <Form.Control placeholder="Confirm Password" /><br/>
          </Form.Group>
          <div className="button">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
          <span>
            <p>
              if you are already an account?<Link to="/">&nbsp;Login</Link>
            </p>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;

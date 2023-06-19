import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [data, setData] = useState({
        Username:"",

        Password:""

    })

    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div className="maincontainer">
      <div className="subcontainer">
        <Form onSubmit={handleSubmit}>
          <h3>Sign in</h3>
          <p>Use Your Google Account</p>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Username" name="Username" value={data.Username} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" size="50" name="Password" value={data.Password} onChange={handleChange} />
          </Form.Group>
          <div className="buttons">
            <Button className="loginbutton" variant="success" type="submit">
              Login
            </Button>
            <Button className="registerbutton" variant="primary">
              <Link to="/register" className="link">Register</Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
       localStorage.setItem("token", result.token);
      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      console.log("User registered:", result);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error.message);
    } finally {
      setFormData({
        email: "",
        name: "",
        password: ""
      });
    }
  };

  return (
    <div>
      <Form className="signup-container" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
         Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

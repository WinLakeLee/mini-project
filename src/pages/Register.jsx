import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Register = ({ }) => {

  const [warning, setWarning] = useState();


  return (


    <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Id</Form.Label>
        <Form.Control type="id" placeholder="Id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTel">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="Tel" placeholder="Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Button variant="info" type="submit">
        Sign in
      </Button>
    </Form>
  );
}


export default Register
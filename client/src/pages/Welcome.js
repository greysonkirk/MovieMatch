import React from "react";

export default function Welcome() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="inputPassword6">Password</Form.Label>
        <Form.Control
          type="password"
          className="mx-sm-3"
          id="inputPassword6"
          aria-describedby="passwordHelpInline"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Must be 8-20 characters long.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

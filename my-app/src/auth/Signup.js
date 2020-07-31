import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Signup</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <input name="username" value={username} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <input name="password" value={password} />
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;

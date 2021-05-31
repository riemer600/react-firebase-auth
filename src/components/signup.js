import React, { useRef, useState } from 'react';
import {
  Alert, Button, Card, Form,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match!');
    }
    try {
      setLoading(true);
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/dashboard');
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError('failed to create Account');
    }
    setLoading(false);
  };
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required ref={passwordConfirmRef} />
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>
              Sign-Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
        Already have an account?
        {' '}
        <Link to="/login">Log-In</Link>
      </div>
    </>
  );
}

export default Signup;

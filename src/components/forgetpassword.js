import React, { useRef, useState } from 'react';
import {
  Alert, Button, Card, Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Login() {
  const emailRef = useRef(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setLoading(true);
      setError('');
      await resetPassword(emailRef.current.value);
      setMessage('check your inbox for further instructions');
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError('failed to reset your password');
    }
    setLoading(false);
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>
              Reset password
            </Button>
          </Form>
          <div className="text-center w-100 mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
        Not registered yet?
        {' '}
        <Link to="/signup">Sign-Up</Link>
      </div>
    </>
  );
}

export default Login;

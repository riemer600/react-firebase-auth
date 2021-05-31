import React, { useRef, useState } from 'react';
import {
  Alert, Button, Card, Form,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/dashboard');
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError('failed to Log in');
    }
    setLoading(false);
  };
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button type="submit" className="w-100" disabled={loading}>
              Log In
            </Button>
          </Form>
          <div className="text-center w-100 mt-3">
            <Link to="/forget-password">Forget password?</Link>
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

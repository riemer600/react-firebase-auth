import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const [error, setError] = useState('');
  const [currentUser, logout] = useState(false);
  const history = useHistory();

  const handleLogOut = async () => {
    setError('');
    try {
      await logout();
      history.push('/login');
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError('can not logout');
    }
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser && (
            <strong>
              Email:
              {currentUser.email}
            </strong>
          )}
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
        <Button variant="link" onclick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
}

export default Dashboard;

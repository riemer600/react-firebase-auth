import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Forgetpassword from './components/forgetpassword';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forget-password" component={Forgetpassword} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;

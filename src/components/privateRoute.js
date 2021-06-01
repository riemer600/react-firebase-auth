import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/authContext';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Route
            /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
      render={(props) => (currentUser ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...props} />
      ) : (
      // eslint-disable-next-line react/jsx-no-undef
        <Redirect to="/login" />
      ))}
    />
  );
}

export default PrivateRoute;

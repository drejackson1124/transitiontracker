import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authState } = useAuthenticator();

  return (
    <Route
      {...rest}
      render={props =>
        authState === AuthState.SignedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;

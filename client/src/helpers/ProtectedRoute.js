
import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route 
    //   {...rest}
      render={props => (isAuthenticated )? (
          <Component {...props} data={null} isAuthenticated={isAuthenticated} />
        ) : 
          <Redirect to={{
            pathname: '/login',
          }} />
      }
    />
  )

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './layouts/home';
import Dashboard from './layouts/dashboard';
import { withAuthenticator } from '@aws-amplify/ui-react';
import config from './amplifyconfiguration.json';

//cognito
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <div className='App'>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard user={user} signOut={signOut} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
    </div>
  );
}

export default withAuthenticator(App);


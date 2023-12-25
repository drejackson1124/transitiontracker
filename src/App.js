import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layouts/home';

//cognito
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//import config from './amplifyconfiguration.json';


//cogntio config file

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: 'us-east-1_YoacMTkL7',
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: '5mmt8m5a8jgqj98qq18b21i5ji',
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: 'us-east-1:567ec376-230c-44ca-98a5-696c79ebe2f3',
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: 'code', // 'code' | 'link'
      loginWith: {
        // OPTIONAL - Hosted UI configuration
        oauth: {
          domain: 'https://transtrackerapp.auth.us-east-1.amazoncognito.com',
          scopes: [
            'phone',
            'email',
            'profile',
            'openid',
            'aws.cognito.signin.user.admin'
          ],
          redirectSignIn: ['https://transtrackerapp.com'],
          redirectSignOut: ['https://transtrackerapp.auth.us-east-1.amazoncognito.com'],
          responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
      }
    }
  }
});

// You can get the current config object
const currentConfig = Amplify.getConfig();
Amplify.configure(currentConfig);

function App({signOut, user}) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home username={user.username} signout={signOut}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);

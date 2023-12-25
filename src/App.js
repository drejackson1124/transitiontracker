import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layouts/home';

//cognito
//import { Amplify } from 'aws-amplify';
//import { withAuthenticator } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';

//cogntio config file
// Amplify.configure({
//   Auth: {
//     Cognito: {
//       //  Amazon Cognito User Pool ID
//       userPoolId: 'us-east-1_x3uymSBwJ',
//       // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//       userPoolClientId: '5sdorpu07bepp01kc8g8789rs6',
//       // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//       identityPoolId: 'us-east-1:d0f21965-4d5c-443b-9b49-5c2673e7eb6a',
//       // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
//       // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
//       signUpVerificationMethod: 'code', // 'code' | 'link'
//       loginWith: {
//         // OPTIONAL - Hosted UI configuration
//         oauth: {
//           domain: 'https://transtrackerup.auth.us-east-1.amazoncognito.com',
//           scopes: [
//             'phone',
//             'email',
//             'profile',
//             'openid',
//             'aws.cognito.signin.user.admin'
//           ],
//           redirectSignIn: ['http://localhost:3000/'],
//           redirectSignOut: ['http://localhost:3000/'],
//           responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
//         }
//       }
//     }
//   }
// });

// // You can get the current config object
// const currentConfig = Amplify.getConfig();
// //console.log(currentConfig);
// Amplify.configure(currentConfig);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


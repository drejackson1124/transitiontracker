import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './layouts/home';
import Dashboard from './layouts/dashboard';
//import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator, View, Image, useTheme, Text } from '@aws-amplify/ui-react';
import config from './amplifyconfiguration.json';

//cognito
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import Navbar from './layouts/navbar';
import AddAppointments from './layouts/addappointment';
import AllAppointments from './layouts/allappointments';
Amplify.configure(config);

const formFields = {
  signUp: {
    name: {
      order:1,
      placeholder: 'Enter Your Name',
      isRequired: true,
    },
    username: {
      order: 2,
      placeholder: 'Create a username',
      isRequired: true,
    },
    email: {
      order: 3,
      placeholder: 'Enter Your Email Here',
      isRequired: true,
    },
    password: {
      order: 4,
      placeholder: 'Create a password',
      isRequired: true,
    },
    confirm_password: {
      order: 5,
      placeholder: 'Re-enter password',
      isRequired: true,
    },
    gender: {
      order: 6,
      placeholder: 'Gender',
      isRequired: true,
      label: 'Gender'
    },
    birthdate: {
      order: 7,
      placeholder: 'What\'s your birth date?',
      isRequired: true,
    }
  },
 };

export default function App() {

  const [appts, updateAppts] = useState([]);

  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="TTA logo"
            src="https://i.ibb.co/85KW2T9/ttlogo2.png"
          />
        </View>
      );
    },
  
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; 2024 My Transition Tracker
          </Text>
        </View>
      );
    }};

  const getAppts = (appts) => {
    updateAppts(appts);
  }

  return (
    <Authenticator formFields={formFields} components={components}>
      {({ signOut, user }) => (
          <Router>
            <Navbar signOut={signOut} user={user}/>
            <Routes>
              <Route path="/" element={<Home signOut={signOut} user={user} getAppts={getAppts}/>} />
              <Route path="/dashboard" element={<Dashboard user={user} signOut={signOut} />} />
              <Route path="/addappt" element={<AddAppointments user={user} />} />
              <Route path="/allappts" element={<AllAppointments appts={appts} user={user} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
      )}
    </Authenticator>
  );
}


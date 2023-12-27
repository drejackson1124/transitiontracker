import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Hello from dashboard!</h1>
    </div>
  );
};

export default Dashboard;

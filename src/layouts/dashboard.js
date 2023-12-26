// import React from 'react';

// const Dashboard = (props) => {
//     console.log(props.user);
//     return (
//         <div>
//             <h1>hello, I am dashboard</h1>
//         </div>

//     )
// }

// export default Dashboard;

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
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;

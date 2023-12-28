import React from 'react';

const MyAppointments = (props) => {

    const getAppointments = (username) => {
        
    };

    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item small-text">INJECTION: 11AM on Jan 4, 2024</li>
            <li className="list-group-item small-text">CHECKUP: 1PM on Jan 10th, 2024</li>
            <li className="list-group-item small-text">INJECTION: 11AM on Feb 4, 2024</li>
            <li className="list-group-item small-text">INJECTION: 11AM on Feb 14, 2024</li>
            <li className="list-group-item small-text">CHECKUP: 1PM on March 1, 2024</li>
        </ul>
    )
}

export default MyAppointments;
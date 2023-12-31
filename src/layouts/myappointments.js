import React, { useEffect, useState } from 'react';
import helpers from '../helpers/helpers';
import moment from 'moment';

const MyAppointments = (props) => {
    const [appts, updateAppts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    useEffect(() => {
        getAppointments(props.user.username);
    }, [])

    const getAppointments = async (username) => {
        const appointments = await helpers.getAppointments(username);
        if(appointments.statusCode === 200){
            updateAppts(appointments.body);
        } else {
            console.log("something went wrong");
        }
    };

    // Get current appointments
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = appts.slice(indexOfFirstItem, indexOfLastItem);
    
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ul className="list-group list-group-flush">
                {currentItems.map((appt, index) => (
                    <li key={index} className="list-group-item small-text">
                        {/* <span className="bold">{appt.appt_type.toUpperCase()}:</span> {appt.time}{appt.meridiem} on {appt.date} */}
                        <span className="bold">{appt.appt_type.toUpperCase()}:</span> {appt.time}{appt.meridiem} on {moment(appt.date).format('ll')}
                    </li>
                ))}
            </ul>
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: Math.ceil(appts.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
                        <li key={number} className="page-item">
                            <a onClick={(e) => { e.preventDefault(); paginate(number)}} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    )
}

export default MyAppointments;
import React, { useState } from "react";
import moment from "moment";
import SideOptions from "./sideoptions";

const AllAppointments = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = props.appts.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
        <div className="row mt-3">
        <div className="col-4">
            <SideOptions/>
        </div>
        <div className="col-8">
            <h5 className="text-center">All Appointments</h5>
            <ul className="list-group list-group-flush">
                {currentItems.map((appt, index) => (
                    <li key={index} className="list-group-item large-text">
                        <span className="bold">{appt.appt_type.toUpperCase()}:</span> {appt.time}{appt.meridiem} on {moment(appt.date).format('ll')}
                    </li>
                ))}
            </ul>
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: Math.ceil(props.appts.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
                        <li key={number} className="page-item">
                            <a onClick={(e) => { e.preventDefault(); paginate(number)}} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
        </div>
        </div>
    )
}

export default AllAppointments;
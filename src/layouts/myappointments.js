import React, { useEffect, useState } from 'react';
import helpers from '../helpers/helpers';
import moment from 'moment';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const MyAppointments = (props) => {
    const [appts, updateAppts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAppointments(props.user.username);
    }, [])

    const getAppointments = async (username) => {
        const appointments = await helpers.getAppointments(username);
        if(appointments.statusCode === 200){
            updateAppts(appointments.body);
            props.getAppts(appointments.body);
            setLoading(false);
        } else {
            console.log("something went wrong");
        }
    };

    return (
        <div>
            {loading ? (
                <ClipLoader color="#6610f2" loading={loading} css={spinnerStyle} size={35} />
            ): (
            <ul className="list-group list-group-flush">
                {appts.filter(appt => moment(appt.date).isBetween(moment(), moment().add(14, 'days'), undefined, '[]')).map((appt, index) => (
                    <li key={index} className="list-group-item large-text">
                        <i class="fa-solid fa-calendar-check me-3 purple-text"></i>
                        <span className="bold">{appt.appt_type.toUpperCase()}:</span> {appt.time}{appt.meridiem} on {moment(appt.date).format('ll')}
                    </li>
                ))}
            </ul>
            )}
            {/* <ul className="list-group list-group-flush">
                {appts.filter(appt => moment(appt.date).isBetween(moment(), moment().add(14, 'days'), undefined, '[]')).map((appt, index) => (
                    <li key={index} className="list-group-item large-text">
                        <i class="fa-solid fa-calendar-check me-3 purple-text"></i>
                        <span className="bold">{appt.appt_type.toUpperCase()}:</span> {appt.time}{appt.meridiem} on {moment(appt.date).format('ll')}
                    </li>
                ))}
            </ul>
        </div> */}
        </div>
    )
};

const spinnerStyle = css`
  display: block;
  margin: auto;
`;

export default MyAppointments;
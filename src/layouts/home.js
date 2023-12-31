import React, { useState, useEffect } from 'react';
import moment from 'moment';
import MoodChart from './moodchart';
import MyAppointments from './myappointments';
import { Link } from 'react-router-dom';
import SideOptions from './sideoptions';
import DailyModal from './dailymodal';

const Home = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const hasModalBeenShownToday = localStorage.getItem('dailyModalShown') === moment().format('YYYY-MM-DD');

    useEffect(() => {
        if (!hasModalBeenShownToday) {
            setShowModal(true);
            localStorage.setItem('dailyModalShown', moment().format('YYYY-MM-DD'));
        }
    },[]);

    const updateMoodChart = (chartData) => {
        // console.log('mood updated');
    };

    return (
        <div className="container">
            <div className='row mt-3'>
                <div className='col-4'>
                    <SideOptions setShowModal={setShowModal}/>
                </div>
                <div className='col-8'>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card h-100 tracker-card">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title tracker-card-title">Upcoming Appointments</h5>
                            <Link to="/allappts" className="btn btn-sm view-all-appts-btn mb-3">View all appointments</Link>
                            <MyAppointments user={props.user} getAppts={props.getAppts}/>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 tracker-card">
                        <div class="card-body p-0 pb-3 pt-3 text-center">
                            <h5 class="card-title tracker-card-title">Lifetime Mood Tracker</h5>
                            <button onClick={() => { setShowModal(true) }} className="btn update-history-btn btn-sm purple-bg mb-3" type="button" id="updatemooddm">
                                Update your mood
                            </button>
                            <MoodChart user={props.user} setShowModal={setShowModal} updateMoodChart={updateMoodChart}/>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 tracker-card">
                        <div class="card-body">
                            <h5 class="card-title tracker-card-title">Progress Report</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 tracker-card">
                        <div class="card-body">
                            <h5 class="card-title tracker-card-title">Recommended for You</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <DailyModal showModal={showModal} handleClose={handleClose} user={props.user} updateMoodChart={updateMoodChart}/>
        </div>
    )
}

export default Home;
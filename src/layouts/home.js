import React from 'react';
import MoodChart from './moodchart';
import MyAppointments from './myappointments';
import { Link } from 'react-router-dom';
import SideOptions from './sideoptions';

const Home = (props) => {
    return (
        <div className="container">
            <div className='row mt-3'>
                <div className='col-4'>
                    <SideOptions/>
                    {/* <div className="d-grid gap-3">
                        <Link to="/addappt" className="btn update-history-btn btn-lg" type="button">
                            Add Appointment <br/> <span className="history-btn-text">Add an upcoming appointment</span>
                        </Link>
                        <button className="btn update-history-btn btn-lg" type="button">
                            Update Daily Mood <br/> <span className="history-btn-text">Monitor your moods</span>
                        </button>
                        <button className="btn update-history-btn btn-lg" type="button">
                            Update Progress <br/> <span className="history-btn-text">Update your changes here</span>
                        </button>
                        <button className="btn update-history-btn btn-lg" type="button">
                            Medications <br/> <span className="history-btn-text">View or update medications</span>
                        </button>
                    </div> */}
                </div>
                <div className='col-8'>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card h-100 tracker-card">
                        <div class="card-body">
                            <h5 class="card-title tracker-card-title">Upcoming Appointments</h5>
                            <MyAppointments user={props.user}/>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 tracker-card">
                        <div class="card-body p-0 pb-3 pt-3">
                            <h5 class="card-title tracker-card-title">Mood Tracker</h5>
                            <MoodChart/>
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
        </div>
    )
}

export default Home;
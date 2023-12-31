import React, { useState } from "react";
import SideOptions from "./sideoptions";
import helpers from "../helpers/helpers";
import { useNavigate } from "react-router-dom";

const AddAppointments = (props) => {
    const navigation = useNavigate();
    const [apptType, setApptType] = useState('');
    const [time, setTime] = useState('');
    const [meridiem, setMeridiem] = useState('');
    const [date, setDate] = useState('');

    const addApptValues = async () => {
        if(apptType === "Appointment Type" || date === "" || meridiem === "AM/PM options" || time === "Choose time"){
            console.log(apptType, time, meridiem, date);
            alert("Please fill in all fields and try again.");
        } else {
            const addAppt = await helpers.addAppointment(props.user.username, time, date, meridiem, apptType);
            console.log(addAppt);
            if(addAppt.statusCode === 200){
                alert("Appointment saved!")
                navigation('/');
            } else {
                alert('Something went wrong');
                console.log(addAppt);
            }
        }
    };

    return (
        <div className="container set-appt-con">
            <div className="row mt-3">
                <div className="col-4">
                    <SideOptions page={"addappt"}/>
                </div>
                <div className="col-8">
                    <select class="form-select form-select-lg" aria-label="Default select example" id="appt_type" onChange={e=>{setApptType(e.target.value)}}>
                        <option selected>Appointment Type</option>
                        <option value="injection">Injection</option>
                        <option value="check-up">Check-up</option>
                        <option value="bloodwork">Bloodwork</option>
                    </select>
                    <div class="row g-2 mt-3">
                <div class="col-md">
                    <div class="form-floating">
                    <select class="form-select form-select-lg" id="time" onChange={e=>{setTime(e.target.value)}}>
                        <option selected>Choose time</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <label for="floatingSelectGrid">Please choose time</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                    <select class="form-select form-select-lg" id="meridiem" onChange={e=>{setMeridiem(e.target.value); console.log("Meridiem selected:", e.target.value);}}>
                        <option selected>AM/PM options</option>
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </select>
                    <label for="floatingSelectGrid">Please choose morning or afternoon</label>
                    </div>
                </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Appointment Date</label>
                    <input type="date" class="form-control form-control-lg" id="apptdate" placeholder="MM/DD/YYYY" onChange={e=>{setDate(e.target.value)}}/>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn purple-bg btn-lg white-text" type="button" onClick={addApptValues}>Add Appointment</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AddAppointments;
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import UserProgress from "./userprogress";

const SideOptions = (props) => {

    useEffect(() => {
        changeActiveButton();
    }, [])

    const changeActiveButton = () => {
        if(props.page === "addappt"){
            const button1 = document.getElementById("addapt");
            button1.classList.add("light-green-bg");
            button1.classList.add("purple-text");
            button1.classList.add("disabled");
            button1.classList.remove("purple-bg");
            button1.innerHTML = 'Add Appointment (current page)';
        }
    };

    return (
        <div className="col-12">
            <div className="d-grid gap-3">
                <Link to="/addappt" className="btn update-history-btn btn-lg box-shadow-medium" type="button" id="addapt">
                    Add Appointment <br/> <span className="purple-text small-text">Add an upcoming appointment</span>
                </Link>
                <button onClick={() => { props.setShowModal(true) }} className="btn update-history-btn btn-lg box-shadow-medium" type="button" id="updatemood">
                    Emotional Check-In <br/> <span className="purple-text small-text">Monitor your moods</span>
                </button>
                <button onClick={() => { props.setShowProgressModal(true) }} className="btn update-history-btn btn-lg box-shadow-medium" type="button" id="updateprogress">
                    Update Progress <br/> <span className="purple-text small-text">Update your changes here</span>
                </button>
                <button className="btn update-history-btn btn-lg box-shadow-medium" type="button" id="medications">
                    Medications <br/> <span className="purple-text small-text">View or update medications</span>
                </button>
                <Link to="/progresspage" className="btn update-history-btn btn-lg box-shadow-medium" type="button" id="medications">
                    Progress Report <br/> <span className="purple-text small-text">View progress across a range of attributes</span>
                </Link>
            </div>
        </div>
    )
}

export default SideOptions;
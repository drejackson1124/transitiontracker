import React, {useEffect} from "react";
import { Link } from "react-router-dom";

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
                <Link to="/addappt" className="btn update-history-btn btn-lg purple-bg" type="button" id="addapt">
                    Add Appointment <br/> <span className="light-green-text">Add an upcoming appointment</span>
                </Link>
                <button onClick={() => { props.setShowModal(true) }} className="btn update-history-btn btn-lg purple-bg" type="button" id="updatemood">
                    Update Daily Mood <br/> <span className="light-green-text">Monitor your moods</span>
                </button>
                <button className="btn update-history-btn btn-lg purple-bg" type="button" id="updateprogress">
                    Update Progress <br/> <span className="light-green-text">Update your changes here</span>
                </button>
                <button className="btn update-history-btn btn-lg purple-bg" type="button" id="medications">
                    Medications <br/> <span className="light-green-text">View or update medications</span>
                </button>
            </div>            
        </div>
    )
}

export default SideOptions;
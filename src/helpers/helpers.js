import axios from "axios";

const helpers = {

    //add user information to dynamodb after sign up
    getAppointments: async function(username){

    },

    addAppointment: async function(username, time, date, meridiem, appt_type){
        try {
            const response = await axios.post('https://xcvnmscgn2.execute-api.us-east-1.amazonaws.com/Production/add-appointment', {username, time, date, meridiem, appt_type})
            return response.data;
        } catch(error) {
            console.error("Error in addAppointment:", error);
            return error.response ? error.response.data : { error: "Unknown error" };
        }
    },
}

export default helpers;
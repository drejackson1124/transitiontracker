import axios from "axios";

const helpers = {

    //add user information to dynamodb after sign up
    getAppointments: async function(username){
        try {
            const response = await axios.post('https://xcvnmscgn2.execute-api.us-east-1.amazonaws.com/Production/get-appointments', {username});
            return response.data;
        } catch(error) {
            return error.response ? error.response.data : { error: "Unknown error" };
        }
    },

    addAppointment: async function(username, time, date, meridiem, appt_type){
        try {
            const response = await axios.post('https://xcvnmscgn2.execute-api.us-east-1.amazonaws.com/Production/add-appointment', {username, time, date, meridiem, appt_type})
            return response.data;
        } catch(error) {
            return error.response ? error.response.data : { error: "Unknown error" };
        }
    },

    addMood: async function(mood, notes, username, timestamp){
        try {
            const response = await axios.post('https://xcvnmscgn2.execute-api.us-east-1.amazonaws.com/Production/add-mood', {mood, notes, username, timestamp})
            return response.data;
        } catch(error) {
            return error.response ? error.response.data : { error: "Unknown error" };
        }
    },

    moods: async function(username){
        try {
            const response = await axios.post('https://xcvnmscgn2.execute-api.us-east-1.amazonaws.com/Production/user-moods', {username})
            return response.data;
        } catch(error) {
            return error.response ? error.response.data : { error: "Unknown error" };
        }
    },

}

export default helpers;
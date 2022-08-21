import axios from "axios";

const setAuthToken = token => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    }
};

export default setAuthToken;
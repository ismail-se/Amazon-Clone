import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/cloneamaz/pk/api'  // The API (cloud function) URL
});

export default instance;
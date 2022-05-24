import axios from "axios"

// Add baseURL to avoid repetition
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    params: {}
});

// Add middleware between client and API request to add a token
axiosInstance.interceptors.request.use((config) => {
    // If there is no user in localStorage, and continue the request
    if (!localStorage.getItem('user')) {
        return config; 
    }

    // If user exists in localStorage, add token in the request header
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        config.headers.authorization = user.token;
    }
    return config
}, (error) => Promise.reject(error))

// Add middleware between API and client response
axiosInstance.interceptors.response.use((response) => response, (error) => {
    // If there is a 401 error
    if (error.response.status === 401) {
        // and there is an user in localStorage, remove them
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
        // Redirect to the login page
        document.location.href = '#/login';
    }
    return Promise.reject(error);
})

export default axiosInstance;
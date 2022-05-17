import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    params: {}
});

axiosInstance.interceptors.request.use((config) => {
    if (!localStorage.getItem('user')) return config;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        config.headers.authorization = user.token;
    }
    return config
}, (error) => Promise.reject(error))

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        if (localStorage.getItem('user')) localStorage.removeItem('user');
        document.location.href = '#/login';
    }
    return Promise.reject(error);
})

export default axiosInstance;
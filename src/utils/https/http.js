import axios from 'axios';
import dotenv from 'dotenv';
import Cookies from "js-cookie";

dotenv.config();
// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HTTP_URL,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

// Step-2: Create request, response & error handlers
const requestHandler = request => {
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    const token = Cookies.get("auth_token")
    if (token) {
        request.headers.Authorization = `${token || ''}`
    }

    return request;
};

const responseHandler = response => {
    return response;
};

const errorHandler = error => {
    const { response } = error
    if (response.status === 401) {
        const token = Cookies.get("auth_token")
        if (token) {
            Cookies.remove("auth_token")
        }

        window.location = '/login';
    }
    return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
http.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

http.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);


// Step-4: Export the newly created Axios instance to be used in different locations.
export default http;
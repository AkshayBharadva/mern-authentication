import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import { setCurrentUser } from '../redux/slices/auth.slice'
import { setErrors } from '../redux/slices/error.slice'

import URLS from "../utils/URLS";

// Register User
export const registerUser = (userData, navigate) => dispatch => {
    // const navigate = useNavigate();

    const api = `${URLS.BASEDOMAIN}${URLS.REGISTER}`

    axios
        .post('api/v1/users/register', userData)
        // .then(res => navigate("/login")) // re-direct to login on successful register
        .then(res => {
            // re-direct to login on successful register
            dispatch(setErrors({}))
            navigate("/login")
        })
        .catch(err => {

            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data
            // })
            dispatch(setErrors(err.response.data))
        }

        );
};

// Login - get user token
export const loginUser = userData => dispatch => {
    const api = `${URLS.BASEDOMAIN}${URLS.LOGIN}`
    axios
        .post("/api/v1/users/login", userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data
            // })
            dispatch(setErrors(err.response.data))

        );
};
// // Set logged in user
// export const setCurrentUser = decoded => {
//     return {
//         type: SET_CURRENT_USER,
//         payload: decoded
//     };
// };
// // User loading
// export const setUserLoading = () => {
//     return {
//         type: USER_LOADING
//     };
// };

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
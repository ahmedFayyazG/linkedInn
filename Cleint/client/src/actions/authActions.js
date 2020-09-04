import { GET_ERRORS } from "./types";
import Axios from "axios";

//Register User
export const registerUser = (userData) => (dispatch) => {
  Axios.post("http://localhost:5000/api/users/register", userData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

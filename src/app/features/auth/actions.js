import {
  LOGIN_SUCCESS,
  LOGOUT,
} from "./constants";
import AuthService from "../../api/auth";

export const login = (username, password) => async(dispatch) => {
  try {
    const res = await AuthService.login(username, password)
      
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
import { login, register, userError } from "./dealer.actiontype";
import { loginapi, registerapi } from "./dealer.api";

export const registerFun = (registerData) => async (dispatch) => {
  try {
    let data = await registerapi(registerData);
    dispatch({ type: register });
  } catch (err) {
    console.log(err);
    dispatch({ type: userError });
  }
};
export const loginFun = (loginData) => async (dispatch) => {
  console.log('loginData:', loginData)
  try {
    let data = await loginapi(loginData);
    console.log('data:', data)
    localStorage.setItem("token", data.data.token);
    let payload = {
      ...loginData,
      token: data.data.token,
    };
    console.log("payload in login:", payload);
    dispatch({ type: login, payload: payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: userError });
  }
};
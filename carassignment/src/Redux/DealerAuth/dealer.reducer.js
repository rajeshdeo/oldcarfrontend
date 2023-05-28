import { login, register, userError } from "./dealer.actiontype";
let init = {
  isAuth: false,
  token: "",
  loading: false,
};
export const dealerReducer = (state = init, action) => {
  const { payload, type } = action;
  switch (type) {
    case register: {
      return {
        ...state,
        isAuth: false,
        loading: false,
      };
    }
    case login: {
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
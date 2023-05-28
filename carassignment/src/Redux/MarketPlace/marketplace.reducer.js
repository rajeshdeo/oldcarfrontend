import { ERROR, GETALL, LOADING } from "./marketplace.actiontype";

let init = {
  marketplace: [],
  loading: false,
  error: false,
};
export const marketplaceReducer = (state = init, action) => {
  const { payload, type } = action;
  switch (type) {
    case GETALL: {
      return { ...state, marketplace: payload, loading: false, error: false };
    }
    case LOADING: {
      return { ...state, loading: true, error: false };
    }
    case ERROR: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
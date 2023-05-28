import {
    ADDCARS,
    DELETECARS,
    ERROR,
    GETCARS,
    LOADING,
    UPDATECARS,
  } from "./dealer_inventory.actiontype";
  import { addapi, deleteapi, getapi, updateapi } from "./dealer_inventory.api";
  export const getFun = () => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let data = await getapi();
      dispatch({ type: GETCARS, payload: data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: ERROR });
    }
  };
  export const addFun = (cardata) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let data = await addapi(cardata);
      console.log("data:", data);
      dispatch({ type: ADDCARS, payload: data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: ERROR });
    }
  };
  export const updateFun = (payload) => async (dispatch) => {
    console.log("payload:update", payload);
    dispatch({ type: LOADING });
    try {
      let data = await updateapi(payload.id, payload.carDetails);
      data = data.data;
      console.log("data:", data);
      let obj = {
          id: payload.id,
          payload: payload.carDetails,
      };
      console.log('obj:', obj)
      dispatch({ type: UPDATECARS, payload: obj });
    } catch (err) {
      console.log(err);
      dispatch({ type: ERROR });
    }
  };
  export const deleteFun = (id) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let data = await deleteapi(id);
      dispatch({ type: DELETECARS, payload: id });
    } catch (err) {
      console.log(err);
      dispatch({ type: ERROR });
    }
  };
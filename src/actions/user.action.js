import httpClient from "./../Utils/HttpClient";

export const UserActionTypes = {
  SET_IS_LOADING: "SET_IS_LOADING",
  USER_RECEIVED: "USER_RECEIVED",
};

export const fetchUsersActions = (params) => (dispatch) => {
  console.log("here at actions>>", params);
  dispatch({
    type: UserActionTypes.SET_IS_LOADING,
    payload: true,
  });
  // // http call
  httpClient
    .GET("/user", true)
    .then((response) => {
      console.log(response);
      dispatch({
        type: UserActionTypes.PRODUCT_RECEIVED,
        payload: response.data,
      });
    })
    .catch((err) => {
      //   notify.handleError(err);
    })
    .finally(() => {
      dispatch({
        type: UserActionTypes.SET_IS_LOADING,
        payload: false,
      });
    });
};

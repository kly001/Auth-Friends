import React from "react";

export const GET_FRIENDS = "GET_FRIENDS";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export const getFriends = () => dispatch => {
    dispatch({type: GET_FRIENDS});
    axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: GET_FRIENDS, payload: response.data });
    })
    .catch(err => dispatch({ type: GET_FAILURE, payload: err }));
};


export const addFriend = (newFriend) => dispatch => {
    dispatch( {type:GET_FRIENDS})
  axios
  .post("http://localhost:5000/api/friends", newFriend)
    .then(response => dispatch(
        { type: GET_SUCCESS,  
           payload:response.data}))
    .catch(error => dispatch(
        { type: GET_FAILURE, 
        payload: error }));
  };
import {GET_FRIENDS, GET_SUCCESS, GET_FAILURE} from "../actions"

const initialState = {
  friends:[],
  getFriends: false,
  addFriend: false,
  error:"",
}

export const friendReducer = (state = initialState,action) => {
  switch (action.type) {
    case GET_FRIENDS:
    return {
      ...state,
      error: "",
      getFriends: true,
    };
  case GET_SUCCESS:
    return { 
      ...state,
      getFriends: false,
      smurfs: action.payload,
      error: "",
    };
  case GET_FAILURE:
    return {
     ...state,
     getFriends: false,
     error: action.payload,    
    };
    
  default:
    return state;
  }
}

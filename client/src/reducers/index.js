// import { combineReducers } from "redux";
import axios from "axios";

const initialState = {
  fetching: false,
  message: ""
};

const Link = "https://labs-event-planner-production.herokuapp.com/";

const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

export const get = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${Link}`)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response.data.message });
    });
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        message: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        message: action.payload
      };
    default:
      return state;
  }
}

// import componentReducerName from "./place"

// export default combineReducers({
//     name: componetReducerName,
// })

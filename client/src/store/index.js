// import { combineReducers } from "redux";
import axios from "axios";

const initialState = {
  fetching: false,
  fetchingUser: false,
  fetchedUser: false,
  fetchingUsers: false,
  fetchedUsers: false,
  postingUser: false,
  postedUser: false,
  updatingUser: false,
  updatedUser: false,
  deletingUser: false,
  deletedUser: false,
  fetchingEvents: false,
  fetchedEvents: false,
  fetchingEvent: false,
  fetchedEvent: false,
  postingEvent: false,
  postedEvent: false,
  updatingEvent: false,
  updatedEvent: false,
  deletingEvent: false,
  deletedEvent: false,
  user: [],
  allUsers: [],
  events: [],
  event: [],
  message: "",
  error: ''
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
    case FETCH_USERS_START:
      return {
        ...state,
        fetchingUsers: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        fetchedUsers: true,
        allUsers: action.payload
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };
    case FETCH_USER_START:
      return {
        ...state,
        fetchingUser: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        fetchedUser: true,
        user: action.payload
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };
    case POST_USER_START:
      return {
        ...state,
        postingUser: true,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        postingUser: false,
        postedUser: true,
        user: action.payload
      };
    case POST_USER_FAIL:
      return {
        ...state,
        postingUser: false,
        error: action.payload
      };
    case UPDATE_USER_START:
      return {
        ...state,
        updatingUser: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updatingUser: false,
        updatedUser: true,
        user: action.payload
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        postingUser: false,
        error: action.payload
      };
    case DELETE_USER_START:
      return {
        ...state,
        deletingUser: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deletingUser: false,
        deletedUser: true,
        user: []
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        deletingUser: false,
        error: action.payload
      };
    case FETCH_EVENTS_START:
      return {
        ...state,
        fetchingEvents: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        fetchingEvents: false,
        fetchedEvents: true,
        events: action.payload
      };
    case FETCH_EVENTS_FAIL:
      return {
        ...state,
        fetchingEvents: false,
        error: action.payload
      };
    case FETCH_EVENT_START:
      return {
        ...state,
        fetchingEvent: true,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        fetchingEvent: false,
        fetchedEvent: true,
        event: action.payload
      };
    case FETCH_EVENT_FAIL:
      return {
        ...state,
        fetchingEvent: false,
        error: action.payload
      };
    case POST_EVENT_START:
      return {
        ...state,
        postingEvent: true,
      };
    case POST_EVENT_SUCCESS:
      return {
        ...state,
        postingEvent: false,
        postedEvent: true,
        //not sure what we would want to do with the action payload here
      };
    case POST_EVENT_FAIL:
      return {
        ...state,
        postingEvent: false,
        error: action.payload
      };
    case UPDATE_EVENT_START:
      return {
        ...state,
        updatingEvent: true,
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        updatingEvent: false,
        updatedEvent: true,
        event: action.payload
      };
    case UPDATE_EVENT_FAIL:
      return {
        ...state,
        updatingEvent: false,
        error: action.payload
      };
    case DELETE_EVENT_START:
      return {
        ...state,
        deletingEvent: true,
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        deletingEvent: false,
        deletedEvent: true,
      };
    case DELETE_EVENT_FAIL:
      return {
        ...state,
        deletingEvent: false,
        error: action.payload
      };
    default:
      return state;
  }
}

const Link = "https://labs-event-planner-staging.herokuapp.com/";

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

///////////////////   Users  ////////////////////

// Post User
const POST_USER_START = 'POST_USER_START';
const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
const POST_USER_FAIL = 'POST_USER_FAIL';

export const postUser = user => dispatch => {
  dispatch({ type: POST_USER_START });
  axios
    .post(`${Link}/user`, user)
    .then(res => {
      dispatch({ type: POST_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_USER_FAIL, payload: err.response.data.message });
    });
};

// Get User by ID
const FETCH_USER_START = 'FETCH_USER_START';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const getUserById = id => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axios
    .get(`${Link}/user/${id}`)
    .then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_FAIL, payload: err.response.data.message });
    });
};

// Get Users
const FETCH_USERS_START = 'FETCH_USERS_START';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get(`${Link}/user`)
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAIL, payload: err.response.data.message });
    });
};

// Update User
const UPDATE_USER_START = 'UPDATE_USER_START';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

export const updateUser = (id, user) => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  axios
    .put(`${Link}/user/${id}`, user)
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAIL, payload: err.response.data.message });
    });
};

// Delete User
const DELETE_USER_START = 'DELETE_USER_START';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axios
    .delete(`${Link}/user/${id}`)
    .then(res => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_FAIL, payload: err.response.data.message });
    });
};

///////////////////   Events ///////////////////

//  Get All events
const FETCH_EVENTS_START = 'FETCH_EVENTS_START';
const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
const FETCH_EVENTS_FAIL = 'FETCH_EVENTS_FAIL';

export const getEvents = () => dispatch => {
  dispatch({ type: FETCH_EVENTS_START });
  axios
    .get(`${Link}/event`)
    .then(res => {
      dispatch({ type: FETCH_EVENTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_EVENTS_FAIL, payload: err.response.data.message });
    });
};

// Get Event by Id
const FETCH_EVENT_START = 'FETCH_EVENT_START';
const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
const FETCH_EVENT_FAIL = 'FETCH_EVENT_FAIL';

export const getEventById = id => dispatch => {
  dispatch({ type: FETCH_EVENT_START });
  axios
    .get(`${Link}/event/${id}`)
    .then(res => {
      dispatch({ type: FETCH_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_EVENT_FAIL, payload: err.response.data.message });
    });
};

// Post an Event
const POST_EVENT_START = 'POST_EVENT_START';
const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS';
const POST_EVENT_FAIL = 'POST_EVENT_FAIL';

export const postEvent = event => dispatch => {
  dispatch({ type: POST_EVENT_START });
  axios
    .post(`${Link}/event`, event)
    .then(res => {
      dispatch({ type: POST_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_EVENT_FAIL, payload: err.response.data.message })
    })
}

// Update an Event
const UPDATE_EVENT_START = 'UPDATE_EVENT_START';
const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
const UPDATE_EVENT_FAIL = 'UPDATE_EVENT_FAIL';

export const updateEvent = (id, event) => dispatch => {
  dispatch({ type: UPDATE_EVENT_START });
  axios
    .put(`${Link}/event/${id}`, event)
    .then(res => {
      dispatch({ type: UPDATE_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_EVENT_FAIL, payload: err.response.data.message })
    })
}

// Delete an event
const DELETE_EVENT_START = 'DELETE_EVENT_START';
const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
const DELETE_EVENT_FAIL = 'DELETE_EVENT_FAIL';

export const deleteEvent = id => dispatch => {
  dispatch({ type: DELETE_EVENT_START });
  axios
    .delete(`${Link}/event/${id}`)
    .then(res => {
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_EVENT_FAIL, payload: err.response.data.message })
    })
}

// import componentReducerName from "./place"

// export default combineReducers({
//     name: componetReducerName,
// })
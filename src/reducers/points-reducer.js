import apiResponseAdapter from 'interfaces/adapters/api-response-adapter';

const DELETE_SUCCESS = 'DELETE_SUCCESS';
const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const SET_SUCCESS = 'SET_SUCCESS';

const hostname = 'http://localhost:8080';
const entityBaseUrl = `${hostname}/api/points`;
const getPointsUrl = `${entityBaseUrl}`;
const getPointsUrlWithId = id => `${getPointsUrl}/${id}`;

export const deletePointSuccess = id => ({
  type: DELETE_SUCCESS,
  id,
});

export const fetchPointsSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: apiResponseAdapter(data),
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error,
});

export const fetchInit = () => ({
  type: FETCH_INIT,
});

export const setPointSuccess = data => ({
  type: SET_SUCCESS,
  payload: data,
});

export function fetchPoints() {
  return async (dispatch) => {
    try {
      dispatch(fetchInit());
      const result = await fetch(getPointsUrl);
      const json = await result.json();
      if (json.errors) {
        return dispatch(fetchFailure(json));
      }
      
      return dispatch(fetchPointsSuccess(json));
    } catch (error) {
      return dispatch(fetchFailure(error));
    }
  };
}

export function deletePoint(id) {
  return async (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };

    try {
      const result = await fetch(getPointsUrlWithId(id), options);

      if (result.status !== 204) {
        const json = await result.json();
        return dispatch(fetchFailure(json));
      }
      
      return dispatch(deletePointSuccess(id));
    } catch (error) {
      return dispatch(fetchFailure(error));
    }
  };
}

export function setPoint(data) {
  return async (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };

    try {
      const result = await fetch(getPointsUrl, options);
      const json = await result.json();
      if (json.errors) {
        return dispatch(fetchFailure(json));
      }
      
      return dispatch(setPointSuccess(data));
    } catch (error) {
      return dispatch(fetchFailure(error));
    }
  };
}

const removePinFromList = (pins, id) => pins.filter(pin => pin.id !== id); 

const pointsReducer = (state = { pins: [] }, action) => {
  switch (action.type) {
    case DELETE_SUCCESS:
      return {
        ...state,
        pins: removePinFromList(state.pins, action.id),
        isLoading: false,
        error: null,
      };
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        pins: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        pins: [...state.pins, action.payload],
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default pointsReducer;

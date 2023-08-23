export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const SUBMIT_USER_DATA_REQUEST = 'SUBMIT_USER_DATA_REQUEST';
export const SUBMIT_USER_DATA_SUCCESS = 'SUBMIT_USER_DATA_SUCCESS';
export const SUBMIT_USER_DATA_FAILURE = 'SUBMIT_USER_DATA_FAILURE';

export const loginUser = (username, password) => dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  // simulate API call
  setTimeout(() => {
    dispatch({ type: LOGIN_SUCCESS, payload: { username } }); // Example payload
  }, 1000);
};

export const registerUser = (username, password) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  // simulate API call
  setTimeout(() => {
    dispatch({ type: REGISTER_SUCCESS, payload: { username } }); // Example payload
  }, 1000);
};

export const setUserData = (userData) => dispatch => {
  dispatch({ type: SUBMIT_USER_DATA_REQUEST });

  // real API call
  fetch('https://apteka911.nezalezhnist.fun/api/data.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    dispatch({ type: SUBMIT_USER_DATA_SUCCESS, payload: data });
  })
  .catch(error => {
    dispatch({ type: SUBMIT_USER_DATA_FAILURE, payload: error.message });
  });
};
// import axios from 'axios';
// import md5 from 'md5';

export const IS_AUTH = 'IS_AUTH';

// const API = `https://uxcandy.com/~shapoval/test-task-backend`

export const authenticate = val => async (dispatch) => {

    dispatch({
        type: IS_AUTH,
        payload: val,
    });
};

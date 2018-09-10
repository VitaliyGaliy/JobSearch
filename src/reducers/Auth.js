import {
    IS_AUTH
} from '../actions/auth';

const initials = {
    tasks: [],
    isAdmin: false
};

const reducer = (state = initials, action) => {
    switch (action.type) {
        case IS_AUTH:
            return { ...state, isAdmin: action.payload };
        default:
            return state;
    }
};

export default reducer;
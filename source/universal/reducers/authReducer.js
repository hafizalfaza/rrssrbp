import { CHECK_AUTH } from '../actions/constants';

const authInitialState = {
    isLoggedIn: false
}

export default (state=authInitialState, action) => {
    switch(action.type){
        case CHECK_AUTH:
            return {
              ...state,
              isLoggedIn: action.payload
            }
        default:
            return state
    }
}
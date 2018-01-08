import { SET_ACTIVE_ROUTE } from '../actions/constants';


const initialNavBarState = {
    activeRoute: '/'
}

export default (state=initialNavBarState, action) => {
    switch(action.type){
        case SET_ACTIVE_ROUTE:
            return {
                ...state,
                activeRoute: action.payload
            }
        default:
            return state
    }
}
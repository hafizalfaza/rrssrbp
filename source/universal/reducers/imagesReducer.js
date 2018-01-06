import { LOAD_IMAGES } from '../actions/constants';

export default (state=[], action) => {
    switch(action.type){
        case LOAD_IMAGES:
            return action.payload
        default:
            return state
    }
}
import { CHANGE_ACTION_BAR } from '../actions/constants';

const actionBarInitialState = {
    leftIcons: [],
    rightIcons: [],
    title: ''
}

export default (state=actionBarInitialState, action) => {
    switch(action.type){
        case CHANGE_ACTION_BAR:
            return action.payload
        default:
            return state
    }
}
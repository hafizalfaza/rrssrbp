import { TOGGLE_SHADOW_BLOCK } from '../actions/constants';

const initialUiReducerState = {
  shadowBlockActive: false
}

export default (state=initialUiReducerState, action) => {
    switch(action.type){
        case TOGGLE_SHADOW_BLOCK:
            return {
              ...state,
              shadowBlockActive: !state.shadowBlockActive
            }
        default:
            return state
    }
}
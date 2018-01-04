import { TEST, LOAD_USER} from './constants';

export const usersAction = () => {
    return {
        type: TEST,
        payload: {test: 'test'}
    }
}


export const loadUser = () => {
    return {
        type: LOAD_USER,
        payload: {test: 'hehehehe'}
    }
}
import { SET_ACTIVE_ROUTE } from '../actions/constants';

export const setActiveRoute = (route) => {
    
    const activeRoute=  route
    
    return {
        type: SET_ACTIVE_ROUTE,
        payload: activeRoute
    }
}

import { CHECK_AUTH } from './constants';


export const checkAuth = (isLoggedIn) => {

  return {
    type: CHECK_AUTH,
    payload: isLoggedIn
  }
}
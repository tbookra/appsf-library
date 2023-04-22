import * as constants from '../../constants'
import { initialState } from './initialState';

const randomUsersReducer = (state = initialState.users, action:any) => {
    switch (action.type) {
      case constants.SET_USERS:
        return action.payload;
      
  
      default:
        return state;
    }
  };
  
  export default randomUsersReducer;
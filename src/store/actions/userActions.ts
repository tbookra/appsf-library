import { Dispatch } from "redux";
import * as constantsTypes from '../../constants'
import { User } from "../../components/home";

interface SetUsers {
    type: "SET_USERS";
    payload: User[]
  
  }

  export type UserAction = SetUsers

  export const setUsers = (newUsers: User[]) => async (dispatch: Dispatch):Promise<void> => {
    try {
      dispatch({ type: constantsTypes.SET_USERS, payload:newUsers });
      
      
    } catch (err:any) {
      // dispatch({ type: constantsTypes.FETCH_ERROR, payload: err.message });
      console.log(err);
      
    }
  };
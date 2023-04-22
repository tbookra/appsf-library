import { Dispatch } from "redux";
import * as constantsTypes from "../../constants";
import { User } from "../../components/home";

interface SetUsers {
  type: "SET_USERS";
  payload: User[];
}

export type UserAction = SetUsers;

export const setUsers =
  (newUsers: User[]) =>
   (dispatch: Dispatch): void => {
    dispatch({ type: constantsTypes.SET_USERS, payload: newUsers });
  };
// export const editUser =
//   (userId: string) =>
//    (dispatch: Dispatch): void => {
//     dispatch({ type: constantsTypes.EDIT_USER, payload: userId });
//   };

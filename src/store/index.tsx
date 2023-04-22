import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import randomUsersReducer from './reducers/usersReducer';

export const store = configureStore({
  reducer: {
    users: randomUsersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
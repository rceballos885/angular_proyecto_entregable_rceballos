import { createAction } from "@ngrx/store";

// Action to handle user login failure

export const loginFailure = createAction(
  '[Session] Login Failure',
  (error: string) => ({ error })
);

// Action to initiate login Success
export const loginSuccess = createAction(
  '[Session] Login Success',
  (username: string, password: string) =>
    ({ username, password })
);

export const logout = createAction('[Session] Logout');
export const authActions = {
  loginSuccess,
  loginFailure,
  logout
};


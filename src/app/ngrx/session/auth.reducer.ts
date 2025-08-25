
import { createReducer, on } from "@ngrx/store";

// Action to handle user login
import { authActions } from './auth.actions';
import { user } from './auth.model';

export interface LoginState {
    user?: user;
    error?: any;
    username?: string;
    password?: string;
}

export const initialLoginState: LoginState = {};

export const authReducer = createReducer(
    initialLoginState,
    on(authActions.loginSuccess, (state, { username, password }) =>
    ({
        ...state,
        username,
        password,
        user: { username, password, isActive: true } as user
    })),
    on(authActions.loginFailure, (state, { error }) => ({ ...state, error })),
    on(authActions.logout, () => ({}))
);
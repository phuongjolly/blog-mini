const initialState = {
    user: null,
    isLoading: false,
    message: ''
}

const LOGIN = 'login';
const LOGIN_SUCCESSFUL = 'loginSuccessful';
const LOGIN_FAILED = 'loginFailed';

export function authenticationReducers(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoading: true
            };
        }
        case LOGIN_SUCCESSFUL: {
            return ({
                ...state,
                currentUser: action.user,
                isLoading: false
            });
        }
        case LOGIN_FAILED: {
            return ({
                ...state,
                isLoading: false,
                message: action.message
            });
        }
        default: return state;
    }
}

export const authenticationActions = {
    login(){
        return true;
    }
}